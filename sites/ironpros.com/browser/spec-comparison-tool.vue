<template>
  <table class="table-responsive table-striped mw-full spec-comparison-tool">
    <tbody>
      <tr>
        <td class="spec-comparison-tool__form">
          <label for="company">
            Select brand
          </label>
          <select
            id="spec-comparison-tool-company"
            name="company"
            autocomplete="company"
            class="custom-select"
            @change="updateSelectableProducts()"
          >
            <option value="">
              Select Company...
            </option>
            <option
              v-for="(c) in companies"
              :key="c.id"
              :value="c.id"
              :selected="(c.id === product.company.id)"
            >
              {{ c.name }}
            </option>
          </select>
          <label for="company">
            Add A Product to Compare:
          </label>
          <select
            id="spec-comparison-tool-product"
            name="product"
            autocomplete="product"
            class="custom-select"
          >
            <option value="">
              Select product...
            </option>
            <option v-for="(p) in selectableProducts" :key="p.id" :value="p.id">
              {{ p.name }}
            </option>
          </select>
          <button
            :disabled="canAdd"
            class="spec-comparison-tool__add-btn"
            title="Add Product"
            @click="updateSelectedProducts()"
          >
            Add &amp; Compare
          </button>
        </td>
        <td
          v-for="(p, index) in productsToCompare"
          :key="p.key"
          class="product-spec--image"
        >
          <common-link
            v-if="p.siteContext.path"
            :href="p.siteContext.path"
            title="View Product"
            class="spec-comparison-product__link"
            @change="emitProductClick('Product Link', ...arguments)"
          >
            <img
              class="lazyload"
              :src="p.primaryImage.src"
              :alt="p.name"
              height="250"
              width="250"
            >
          </common-link>
          <button
            v-if="(index !== 0)"
            class="spec-comparison-tool__remove-btn"
            title="Remove Product"
            @click="removeSelectedProduct(p.id)"
          >
            &times;
          </button>
        </td>
      </tr>
      <tr>
        <th class="product-spec--name" />
        <td
          v-for="(p) in productsWithSpecs"
          :key="p.id"
          class="product-spec--name"
        >
          <common-link
            :href="p.siteContext.path"
            title="View Product"
            class="spec-comparison-product-link"
            @click="emitCompanyClick('Product Link', ...arguments)"
          >
            {{ p.name }}
          </common-link>
        </td>
      </tr>
      <tr>
        <th>
          From:
        </th>
        <td
          v-for="(p) in productsWithSpecs"
          :key="p.id"
          class="product-spec--from"
        >
          <common-link
            v-if="p.company && p.company.canonicalPath"
            :href="p.company.canonicalPath"
            title="View Company"
            class="spec-comparison-company-link"
            @click="emitCompanyClick('Company Link', ...arguments)"
          >
            {{p.company.name}}
          </common-link>
        </td>
      </tr>
      <tr>
        <th class="product-spec--download-url">
          Download URL:
        </th>
        <td
          v-for="(p) in productsWithSpecs"
          :key="p.id"
          class="product-spec--download-url"
        >
          <common-link
            v-if="p.downloadUrl"
            :href="p.downloadUrl"
            title="Product URL"
            class="spec-comparison-product-download-url"
            @click="emitProdurctDownloadUrlClick('Product Download URL', ...arguments)"
          >
            <desktop-download />
          </common-link>
        </td>
      </tr>
      <tr v-for="(s) in specList" :key="s.key">
        <th>{{ s.label }}</th>
        <td v-for="(p) in productsWithSpecs" :key="p.id">
          <product-spec :product="p" :spec="s" />
        </td>
      </tr>
      <tr>
        <th>See More</th>
        <td v-for="(p) in productsWithSpecs" :key="p.id">
          <div
            v-if="hasSeeMoreLink(p)"
          >
            <a :href="hasSeeMoreLink(p)">
              See More Info!
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import DesktopDownload from '@mindful-web/marko-web-icons/browser/desktop-download.vue';
import CommonLink from './common/link.vue';
import ProductSpec from './common/product-spec.vue';
import appendSpecs from './utils/append-specs-to-products';
import generateSpecList from './utils/generate-spec-list';
import getAsArray from './utils/get-as-array';
import specCompanyFilter from './graphql/queries/spec-company-filter';
import specProductQuery from './graphql/queries/spec-product';

export default {
  components: {
    DesktopDownload,
    ProductSpec,
    CommonLink,
  },
  inject: ['$graphql'],
  props: {
    product: {
      type: Object,
      required: true,
    },
    specServiceUrl: {
      type: String,
      require: true,
      default: 'http://host.docker.internal:23335',
    },
  },
  data: () => ({
    prodToCompare: {},
    // loading & errors
    isLoading: false,
    hasLoaded: false,
    error: null,
    // mySpecStuff
    selectedProducts: [],
    companies: [],
    specsToAppend: [],
    productsWithSpecs: [],
    selectableProducts: [],
    productToCompare: [],
  }),
  computed: {
    canAdd() {
      if (this.isLoading) return false;
      return Object.keys(this.productsToCompare).length === 5;
    },
    productsToCompare() {
      if (this.isLoading) return this.productsWithSpecs;
      return this.productsWithSpecs;
    },

    products() {
      return [this.prodToCompare, ...this.selectedProducts];
    },
    productIds() {
      return this.products.map(({ id }) => id);
    },
    company() {
      const { company } = this.prodToCompare;
      return company;
    },
    sectionAlias() {
      const { prodToCompare } = this;
      return prodToCompare.primarySection.alias;
    },
    specList() {
      return generateSpecList({ specsToAppend: this.specsToAppend });
    },
  },
  async created() {
    // set prod and adjust image;
    this.prodToCompare = this.product;
    if (this.prodToCompare.primaryImage && this.prodToCompare.primaryImage.src) {
      const src = this.prodToCompare.primaryImage.src.split('?')[0];
      this.prodToCompare.primaryImage.src = `${src}?auto=format%2Ccompress&fill=solid&fit=fillmax&h=300&q=70&w=300`;
    }
    await this.loadCompanies();
    await this.updateSelectableProducts();
    await this.loadSpecAndAppend();
  },
  methods: {
    // Load Companies to display in the brand dropdown
    async loadCompanies() {
      this.isLoading = false;
      try {
        // @todo Figure out limits/skip display of all
        const input = {
          sectionAlias: this.sectionAlias,
          includeContentTypes: ['Company'],
          pagination: {
            limit: 50,
          },
        };
        const companies = [];
        const data = await this.$graphql.query({
          query: specCompanyFilter,
          variables: { input },
          // headers: {},
        });
        getAsArray(data, 'data.websiteScheduledContent.edges').forEach((doc) => companies.push(doc.node));
        // @todo figure out below sort this if we continut to use websitreScheduledContent
        this.companies = companies.sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    // Update & load the list of Product in the product drop down
    async updateSelectableProducts() {
      const companyId = this.$el.querySelector('#spec-comparison-tool-company').value;
      this.isLoading = true;
      this.error = null;
      try {
        if (!companyId) return;
        this.selectableProducts = [];
        // @todo Figure out limits/skip display of all
        const input = {
          sectionAlias: this.sectionAlias,
          company: Number(companyId),
          excludeContentIds: [this.prodToCompare.id],
          includeContentTypes: ['Product'],
          pagination: {
            limit: 500,
          },
        };
        const data = await this.$graphql.query({
          query: specProductQuery,
          variables: { input },
        });
        getAsArray(data, 'data.websiteScheduledContent.edges').forEach((doc) => this.selectableProducts.push(doc.node));
        this.selectableProducts = this.selectableProducts
          .sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    // Used On click of X in upper right corner of product
    async removeSelectedProduct(pid) {
      if (!pid) return;
      const productToRemove = this.selectedProducts.filter(({ id }) => {
        const foundOneToRemove = Number(id) === Number(pid);
        return foundOneToRemove;
      })[0];
      if (productToRemove) {
        this.selectedProducts = this.selectedProducts.filter(({ id }) => id !== pid);
        await this.loadSpecAndAppend();
      }
    },

    // Updae the list of selected Product & append the specs.
    async updateSelectedProducts() {
      const productId = this.$el.querySelector('#spec-comparison-tool-product').value;
      if (!productId) return;

      const found = this.selectedProducts.find(({ id }) => Number(id) === Number(productId));
      if (found) return;

      const productToAdd = this.selectableProducts.filter(({ id }) => {
        const foundOne = Number(id) === Number(productId);
        return foundOne;
      })[0];

      if (productToAdd) {
        this.selectedProducts.push(productToAdd);
        await this.loadSpecAndAppend();
      }
    },

    // Use internal route to puse to avvout cross orgin header issues
    async loadSpecs({
      ids,
    } = { ids: [] }) {
      const res = await fetch('/__load-specs', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          ids,
        }),
      });
      return res.json();
    },

    // Get the specs from the server ad apppend them to the related products
    async loadSpecAndAppend() {
      this.isLoading = true;
      this.error = null;
      try {
        const specsToAppend = await this.loadSpecs({ ids: this.productIds }) || { specs: [] };
        this.specsToAppend = specsToAppend.specs;
        this.productsWithSpecs = appendSpecs({
          products: this.products,
          specsToAppend: this.specsToAppend,
        });
        this.hasLoaded = true;
      } catch (e) {
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },

    // Load produts into the drop down based the selected company
    async loadProducts() {
      this.isLoading = true;
      this.error = null;
      try {
        // @todo Figure out limits/skip display of all
        const input = {
          sectionAlias: this.sectionAlias,
          excludeContentIds: [this.prodToCompare.id],
          includeContentTypes: ['Product'],
          pagination: {
            limit: 5,
          },
        };
        const selectableProducts = [];
        const data = await this.$graphql.query({
          query: specProductQuery,
          variables: { input },
          // headers: {},
        });
        getAsArray(data, 'data.websiteScheduledContent.edges').forEach((doc) => selectableProducts.push(doc.node));
        this.loadSpecAndAppend();
        return selectableProducts;
      } catch (error) {
        this.error = error.message;
        return [];
      } finally {
        this.isLoading = false;
      }
    },

    // Helper for see more link
    hasSeeMoreLink(product) {
      const spec = product.specs.filter(({ key, value }) => key === 'seeMore' && value !== '')[0] || {};
      return spec.value;
    },
  },
};
</script>
