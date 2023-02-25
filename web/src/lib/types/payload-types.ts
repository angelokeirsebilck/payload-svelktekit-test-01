/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "companyInfo".
 */
export interface CompanyInfo {
  id: string;
  email: string;
  tel: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  logo: string | Image;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "image".
 */
export interface Image {
  id: string;
  alt: string;
  prefix?: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    thumbnail: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nav".
 */
export interface Nav {
  id: string;
  items: {
    page: string | Page;
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  pagesType: 'default' | 'newsOverview';
  slug?: string;
  uri?: string;
  pageTitle: string;
  block: (
    | {
        title: string;
        items: {
          image: string | Image;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'bannerImageSwiperBlock';
      }
    | {
        text: {
          [k: string]: unknown;
        }[];
        bgColor: 'white' | 'light';
        id?: string;
        blockName?: string;
        blockType: 'textBlock';
      }
    | {
        text: {
          [k: string]: unknown;
        }[];
        link: {
          link: {
            type: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        settings: {
          textPos: 'left' | 'right';
          textVerAlign: 'self-start' | 'self-center' | 'self-end';
          bgColor: 'white' | 'light';
        };
        image: string | Image;
        id?: string;
        blockName?: string;
        blockType: 'textImageBlock';
      }
    | {
        image: string | Image;
        bgColor: 'white' | 'light';
        id?: string;
        blockName?: string;
        blockType: 'imageBlock';
      }
    | {
        title?: string;
        newsType: 'latest' | 'related' | 'selected';
        selectedNews: {
          newsItem: string | News;
          id?: string;
        }[];
        link: {
          type: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'primary' | 'secondary';
        };
        settings: {
          bgColor: 'white' | 'light';
        };
        id?: string;
        blockName?: string;
        blockType: 'newsBlock';
      }
    | {
        bgColor: 'white' | 'light';
        uspList: {
          uspTitle: string;
          icon: 'rocket' | 'seo' | 'responsive';
          svg: string | Svg;
          uspText: string;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'uspBlock';
      }
    | {
        bgColor: 'white' | 'light';
        id?: string;
        blockName?: string;
        blockType: 'newsOverviewBlock';
      }
    | {
        form: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'formBlock';
      }
    | {
        bgColor: 'white' | 'light';
        ctaTitle: string;
        ctaText?: string;
        link: {
          type: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'primary' | 'secondary';
        };
        id?: string;
        blockName?: string;
        blockType: 'ctaBlock';
      }
    | {
        form: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'contactBlock';
      }
  )[];
  meta: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  parent?: string | Page;
  breadcrumbs: {
    doc?: string | Page;
    url?: string;
    label?: string;
    id?: string;
  }[];
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: string;
  slug?: string;
  uri?: string;
  pageTitle: string;
  newsCat: string | NewsCategory;
  overviewImage: string | Image;
  block: (
    | {
        title: string;
        items: {
          image: string | Image;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'bannerImageSwiperBlock';
      }
    | {
        text: {
          [k: string]: unknown;
        }[];
        bgColor: 'white' | 'light';
        id?: string;
        blockName?: string;
        blockType: 'textBlock';
      }
    | {
        text: {
          [k: string]: unknown;
        }[];
        link: {
          link: {
            type: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        settings: {
          textPos: 'left' | 'right';
          textVerAlign: 'self-start' | 'self-center' | 'self-end';
          bgColor: 'white' | 'light';
        };
        image: string | Image;
        id?: string;
        blockName?: string;
        blockType: 'textImageBlock';
      }
    | {
        image: string | Image;
        bgColor: 'white' | 'light';
        id?: string;
        blockName?: string;
        blockType: 'imageBlock';
      }
    | {
        title?: string;
        newsType: 'latest' | 'related' | 'selected';
        selectedNews: {
          newsItem: string | News;
          id?: string;
        }[];
        link: {
          type: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'primary' | 'secondary';
        };
        settings: {
          bgColor: 'white' | 'light';
        };
        id?: string;
        blockName?: string;
        blockType: 'newsBlock';
      }
    | {
        bgColor: 'white' | 'light';
        uspList: {
          uspTitle: string;
          icon: 'rocket' | 'seo' | 'responsive';
          svg: string | Svg;
          uspText: string;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'uspBlock';
      }
    | {
        bgColor: 'white' | 'light';
        id?: string;
        blockName?: string;
        blockType: 'newsOverviewBlock';
      }
    | {
        form: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'formBlock';
      }
    | {
        bgColor: 'white' | 'light';
        ctaTitle: string;
        ctaText?: string;
        link: {
          type: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'primary' | 'secondary';
        };
        id?: string;
        blockName?: string;
        blockType: 'ctaBlock';
      }
    | {
        form: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'contactBlock';
      }
  )[];
  meta: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "newsCategory".
 */
export interface NewsCategory {
  id: string;
  name: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "svg".
 */
export interface Svg {
  id: string;
  prefix?: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: string;
  title: string;
  fields: (
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect: {
    url: string;
  };
  emails: {
    emailTo: string;
    bcc?: string;
    replyTo?: string;
    replyToName?: string;
    emailFrom?: string;
    emailFromName?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "socials".
 */
export interface Social {
  id: string;
  social: {
    social: 'facebook' | 'instagram';
    url: string;
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "home".
 */
export interface Home {
  id: string;
  pageTitle: string;
  block: (
    | {
        title: string;
        items: {
          image: string | Image;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'bannerImageSwiperBlock';
      }
    | {
        text: {
          [k: string]: unknown;
        }[];
        bgColor: 'white' | 'light';
        id?: string;
        blockName?: string;
        blockType: 'textBlock';
      }
    | {
        text: {
          [k: string]: unknown;
        }[];
        link: {
          link: {
            type: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        settings: {
          textPos: 'left' | 'right';
          textVerAlign: 'self-start' | 'self-center' | 'self-end';
          bgColor: 'white' | 'light';
        };
        image: string | Image;
        id?: string;
        blockName?: string;
        blockType: 'textImageBlock';
      }
    | {
        image: string | Image;
        bgColor: 'white' | 'light';
        id?: string;
        blockName?: string;
        blockType: 'imageBlock';
      }
    | {
        title?: string;
        newsType: 'latest' | 'related' | 'selected';
        selectedNews: {
          newsItem: string | News;
          id?: string;
        }[];
        link: {
          type: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'primary' | 'secondary';
        };
        settings: {
          bgColor: 'white' | 'light';
        };
        id?: string;
        blockName?: string;
        blockType: 'newsBlock';
      }
    | {
        bgColor: 'white' | 'light';
        uspList: {
          uspTitle: string;
          icon: 'rocket' | 'seo' | 'responsive';
          svg: string | Svg;
          uspText: string;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'uspBlock';
      }
    | {
        bgColor: 'white' | 'light';
        id?: string;
        blockName?: string;
        blockType: 'newsOverviewBlock';
      }
    | {
        form: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'formBlock';
      }
    | {
        bgColor: 'white' | 'light';
        ctaTitle: string;
        ctaText?: string;
        link: {
          type: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'primary' | 'secondary';
        };
        id?: string;
        blockName?: string;
        blockType: 'ctaBlock';
      }
    | {
        form: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'contactBlock';
      }
  )[];
  meta: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  _status?: 'draft' | 'published';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "file".
 */
export interface File {
  id: string;
  prefix?: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData: {
    field: string;
    value: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
