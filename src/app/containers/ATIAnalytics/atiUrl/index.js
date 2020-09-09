import {
  getDestination,
  getAppType,
  getScreenInfo,
  getBrowserViewPort,
  getCurrentTime,
  getDeviceLanguage,
  getHref,
  getReferrer,
  getAtUserId,
  isLocServeCookieSet,
  sanitise,
  getAtiUrl,
  getEventInfo,
  getProducer,
  getCampaignType,
  getATIMarketingString,
} from '#lib/analyticsUtils';

const spaceRegex = / /g;

/*
 * For AMP pages, certain browser and device values are determined
 * https://github.com/ampproject/amphtml/blob/master/spec/amp-var-substitutions.md#device-and-browser
 */

export const buildATIPageTrackPath = ({
  appName,
  contentId,
  contentType,
  language,
  ldpThingIds,
  ldpThingLabels,
  pageIdentifier,
  pageTitle,
  producerId,
  libraryVersion,
  platform,
  statsDestination,
  timePublished,
  timeUpdated,
  origin,
  previousPath,
  categoryName,
  campaigns,
}) => {
  const href = getHref(platform);
  const decodedHref = decodeURIComponent(href);
  const referrer = getReferrer(platform, origin, previousPath);
  const campaignType = getCampaignType();

  // We use amp variable substitutes to get the href and referrer and these cannot be manipulated
  // For canonical, we have a requirement to encode the x5 and x6 value twice. Source issue: https://github.com/bbc/simorgh/pull/6593
  const x5Value = platform === 'amp' ? href : href && encodeURIComponent(href);
  const x6Value =
    platform === 'amp' ? referrer : referrer && encodeURIComponent(referrer);

  const pageViewBeaconValues = [
    {
      key: 's',
      description: 'destination',
      value: getDestination(statsDestination),
      wrap: false,
      escapeValue: true,
    },
    {
      key: 'idclient',
      description: 'at user id',
      value: getAtUserId(),
      wrap: false,
      escapeValue: true,
    },
    {
      key: 's2',
      description: 'producer',
      value: producerId,
      wrap: false,
      escapeValue: true,
    },
    {
      key: 'p',
      description: 'page identifier',
      value: pageIdentifier,
      wrap: false,
      escapeValue: true,
    },
    {
      key: 'r',
      description: 'screen resolution & colour depth',
      value: getScreenInfo(platform),
      wrap: false,
      escapeValue: true,
    },
    {
      key: 're',
      description: 'browser/viewport resolution',
      value: getBrowserViewPort(platform),
      wrap: false,
      escapeValue: true,
    },
    {
      key: 'hl',
      description: 'time',
      value: getCurrentTime(platform),
      wrap: false,
      escapeValue: true,
    },
    {
      key: 'lng',
      description: 'device language',
      value: getDeviceLanguage(platform),
      wrap: false,
      escapeValue: true,
    },
    { key: 'x1', description: 'content id', value: contentId, wrap: true },
    {
      key: 'x2',
      description: 'app type',
      value: getAppType(platform),
      wrap: true,
      escapeValue: true,
    },
    {
      key: 'x3',
      description: 'app name',
      value: appName,
      wrap: true,
      escapeValue: true,
    },
    { key: 'x4', description: 'language', value: language, wrap: true },
    {
      key: 'x5',
      description: 'url',
      value: x5Value,
      wrap: true,
      escapeValue: false,
    },
    {
      key: 'x6',
      description: 'referrer url',
      value: x6Value,
      wrap: true,
      escapeValue: false,
    },
    { key: 'x7', description: 'content type', value: contentType, wrap: true },
    {
      key: 'x8',
      description: 'library version',
      value: libraryVersion,
      wrap: true,
      escapeValue: true,
    },
    {
      key: 'x9',
      description: 'page title',
      value: sanitise(pageTitle),
      wrap: true,
      escapeValue: true,
    },
    {
      key: 'x11',
      description: 'publication time',
      value: timePublished,
      wrap: true,
      escapeValue: true,
    },
    {
      key: 'x12',
      description: 'updated time',
      value: timeUpdated,
      wrap: true,
      escapeValue: true,
    },
    {
      key: 'x13',
      description: 'ldp things labels',
      value: ldpThingLabels,
      wrap: true,
      escapeValue: true,
    },
    {
      key: 'x14',
      description: 'ldp things ids',
      value: ldpThingIds,
      wrap: true,
      escapeValue: true,
    },
    {
      key: 'x16',
      description: 'campaigns',
      value: (Array.isArray(campaigns) ? campaigns : [])
        .map(campaign => campaign.campaignName.replace(spaceRegex, '%20'))
        .join('~'),
      wrap: true,
      escapeValue: false,
    },
    {
      key: 'x17',
      description: 'category',
      value: categoryName,
      wrap: true,
      escapeValue: true,
    },
    {
      key: 'x18',
      description: 'boolean - if locserve cookie value is defined',
      value: isLocServeCookieSet(),
      wrap: true,
      escapeValue: true,
    },
    {
      key: 'xto',
      description: 'marketing campaign',
      value: getATIMarketingString(decodedHref, campaignType),
      wrap: false,
    },
    {
      key: 'ref',
      description: 'referrer url',
      value: getReferrer(platform, origin, previousPath),
      wrap: false,
      escapeValue: true,
    },
  ];

  return getAtiUrl(pageViewBeaconValues);
};

export const buildATIEventTrackUrl = ({
  pageIdentifier,
  service,
  platform,
  statsDestination,
  componentName,
  componentInfo,
  type,
}) => {
  const eventPublisher = type === 'view' ? 'ati' : 'atc';
  const eventTrackingBeaconValues = [
    {
      key: 's',
      description: 'destination',
      value: getDestination(statsDestination),
      wrap: false,
      escapeValue: true,
    },
    {
      key: 's2',
      description: 'producer',
      value: getProducer(service),
      wrap: false,
      escapeValue: true,
    },
    {
      key: 'p',
      description: 'page identifier',
      value: pageIdentifier,
      wrap: false,
      escapeValue: true,
    },
    {
      key: 'r',
      description: 'screen resolution & colour depth',
      value: getScreenInfo(platform),
      wrap: false,
      escapeValue: true,
    },
    {
      key: 're',
      description: 'browser/viewport resolution',
      value: getBrowserViewPort(platform),
      wrap: false,
      escapeValue: true,
    },
    {
      key: 'hl',
      description: 'time',
      value: getCurrentTime(platform),
      wrap: false,
      escapeValue: true,
    },
    {
      key: 'lng',
      description: 'device language',
      value: getDeviceLanguage(platform),
      wrap: false,
      escapeValue: true,
    },
    {
      key: eventPublisher,
      description: 'event publisher',
      value: getEventInfo(pageIdentifier, {
        service,
        componentName,
        componentInfo,
        type: type || '',
      }),
      wrap: false,
      escapeValue: true,
    },
  ];

  return `${process.env.SIMORGH_ATI_BASE_URL}${getAtiUrl(
    eventTrackingBeaconValues,
  )}&type=AT`;
};
