const gql = require('graphql-tag');
const qf = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/content-page');

const factory = ({ useLinkInjectedBody = false, withMagazineSchedules = false } = {}) => {
  const monorailFragment = qf.factory ? qf.factory(
    { useLinkInjectedBody, withMagazineSchedules },
  ) : qf;

  const fragment = gql`

  fragment LocalContentPageFragment on Content {
    ... on ContentCompany {
      bannerImagePath: customAttribute(input: { path: "bannerImagePath" })
      sidebars: sidebarStubs {
        name
        body
        label
      }
      address1
      address2
      cityStateZip
      country

      phone
      tollfree
      fax
      website
      title
      mobile
      email
      publicEmail

      youtube {
        username
        channelId
        url
      }

      # kv data
      yearsInOperation
      numberOfEmployees
      salesChannels
      salesRegion
      linesCarried: customAttribute(input: {
        path: "linesCarried"
      })

      # long text data
      productSummary
      servicesProvided
      serviceInformation
      trainingInformation
      warrantyInformation

      # circle image
      leadersLogo: primaryImage {
        id
        src(input: { options: { auto: "format,compress", q: 70, fillColor: "fff", fit: "fill", h: 125, w: 125, pad: 5, mask: "ellipse" } })
        alt
      }

      children(input: { pagination: { limit: 25 } }) {
        edges {
          node {
            name(input: { mutation: null })
            address1
            address2
            cityStateZip
            country
            phone
            tollfree
            fax
            publicEmail
          }
        }
      }

      contacts: publicContacts {
        edges {
          node {
            id
            name
            title
            publicEmail
            primaryImage {
              id
              src(input: { options: { auto: "format,compress", q: 70, h: 100, w: 100, mask: "ellipse", fit: "facearea", facepad: 3 } })
            }
          }
        }
      }

      videos: youtubeVideos(input: { pagination: { limit: 3 } }) {
        edges {
          node {
            id
            url
            title
            published
            thumbnail(input: { size: high })
          }
        }
      }
      websiteSchedules {
        section {
          id
          alias
          name
          fullName
        }
      }
    }
    ... on ContentProduct {
      downloadUrl
    }
    ... on ContentWebinar {
      linkUrl
      startDate
      transcript
      sponsors {
        edges {
          node {
            id
            name
            siteContext {
              path
            }
          }
        }
      }
    }
    company {
      id
      labels
      name
      canonicalPath
      enableRmi
      primaryImage {
        id
        src(input: { options: { auto: "format,compress", q: 70, fillColor: "fff", fit: "fill", h: 125, w: 125, pad: 5, } })
        alt
      }
    }
    taxonomy {
      edges {
        node {
          id
          name
        }
      }
    }
    siteContext {
      url
      path
      canonicalUrl
    }
    ...ContentPageFragment
  }
  ${monorailFragment}


  `;
  fragment.factory = factory;
  return fragment;
};

module.exports = factory();
