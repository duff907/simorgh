import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { noAscendersOrDescenders } from '@bbc/gel-foundations/scripts';
import { japanese as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Tokyo';
import 'moment/locale/ja';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `ja`,
    articleAuthor: `https://www.facebook.com/bbcnews/`,
    articleTimestampPrefix: '更新',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-japanese',
    atiAnalyticsProducerId: '56',
    chartbeatDomain: 'japanese.bbc.co.uk',
    brandName: 'BBCニュース',
    product: 'BBC News',
    serviceLocalizedName: 'ニュース',
    defaultImage:
      'https://news.files.bbci.co.uk/include/articles/public/japanese/images/metadata/poster-1024x576.png',
    defaultImageAltText: 'BBCニュース',
    dir: `ltr`,
    externalLinkText: ' は外部ページです',
    imageCaptionOffscreenText: '画像説明, ',
    videoCaptionOffscreenText: '動画説明, ',
    audioCaptionOffscreenText: '音声説明, ',
    defaultCaptionOffscreenText: 'キャプション, ',
    imageCopyrightOffscreenText: '画像提供, ',
    locale: `ja-JP`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'ja',
    datetimeLocale: `ja`,
    service: 'japanese',
    serviceName: 'Japan',
    languageName: 'Japanese',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcnewsjapan',
    twitterSite: '@bbcnewsjapan',
    noBylinesPolicy:
      'https://www.bbc.com/japanese/help-49677253#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/japanese/help-49677253',
    isTrustProjectParticipant: true,
    script: noAscendersOrDescenders,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: '最新ニュース',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      ads: {
        advertisementLabel: '広告',
      },
      seeAll: '全ての記事を見る',
      home: 'ホーム',
      currentPage: '現在のページ',
      skipLinkText: 'コンテンツへ移動',
      relatedContent: '関連コンテンツ',
      navMenuText: 'ジャンル',
      mediaAssetPage: {
        mediaPlayer: 'メディアプレイヤー',
        audioPlayer: '音声プレイヤー',
        videoPlayer: '動画プレイヤー',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'ページが見つかりません',
          message:
            'お探しのページが見つかりません。こちらを開いてみてください:',
          solutions: [
            'URLを確認',
            'ブラウザのページ更新ボタンを押す',
            'BBC検索バーを使ってこのページを探す',
          ],
          callToActionFirst: 'あるいは ',
          callToActionLinkText: 'BBCニュース　ホームページ',
          callToActionLast: ' をご覧ください',
          callToActionLinkUrl: 'https://www.bbc.com/japanese',
        },
        500: {
          statusCode: '500',
          title: '"内部サーバーエラー"',
          message:
            '申し訳ありません。お探しのページは現在開くことができません。こちらをお試しください:',
          solutions: ['ブラウザのページ更新ボタンを押す', '後でまた開く'],
          callToActionFirst: 'あるいは ',
          callToActionLinkText: 'BBCニュース　ホームページ',
          callToActionLast: 'をご覧ください',
          callToActionLinkUrl: 'https://www.bbc.com/japanese',
        },
      },
      consentBanner: {
        privacy: {
          title: '個人情報とクッキーの方針を更新しました',
          description: {
            uk: {
              first:
                '本サイトの個人情報とクッキーに関する方針に重要な変更を加えました。これがあなたとあなたの情報にどう関わるか、こちらで説明します。',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                '本サイトの個人情報とクッキーに関する方針に重要な変更を加えました。これがあなたとあなたの情報にどう関わるか、こちらで説明します。',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'OK',
          reject: '変更点を見る',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'クッキー使用に同意するか教えてください',
          description: {
            uk: {
              first: '本サイトでは最高のオンライン体験をご提供するため ',
              linkText: 'クッキー',
              last:
                ' を使用しています。すべてのクッキー使用に同意するか教えてください。',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: '本サイトおよび提携サイトは ',
              linkText: 'クッキー',
              last:
                ' などの技術を使用し、あなたに最高のオンライン体験をご提供するためネット閲覧データを集め、あなたにあつらえてパーソナライズしたコンテンツや広告を表示します。これに同意するかお知らせください。',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'はい、同意します',
          reject: 'いいえ、設定ページを開いてください',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: 'お使いの端末ではメディアプレイバックはご利用になれません',
        contentExpired: 'このコンテンツはもうご利用いただけません。',
        contentNotYetAvailable: 'このコンテンツはまだ再生できません。',
        audio: '音声',
        photogallery: '写真ギャラリー',
        video: 'ビデオ',
        listen: '聴く',
        watch: '観る',
        liveLabel: '生放送',
        nextLabel: '次の番組へ',
        previousRadioShow: '前のラジオ番組',
        nextRadioShow: '次のラジオ番組',
        duration: '所要時間',
        recentEpisodes: 'さらに',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: '動画説明, ',
          text: 'ご注意：外部コンテンツには広告が含まれるかもしれません',
        },
        fallback: {
          text: 'このコンテンツは開けません',
          linkText: '%provider_name%でさらに見る',
          linkTextSuffixVisuallyHidden: ', は外部ページです',
          warningText: 'BBCは外部サイトの内容に責任を負いません。',
        },
        skipLink: {
          text: '%provider_name% の投稿を飛ばす',
          endTextVisuallyHidden: '%provider_name% の投稿の終わり',
        },
      },
      include: {
        errorMessage:
          'Sorry, we can’t display this part of the story on this lightweight mobile page.',
        linkText: 'View the full version of the page to see all the content.',
      },
      topStoriesTitle: 'トップ記事',
      featuresAnalysisTitle: '読み物・解説',
    },
    brandSVG,
    mostRead: {
      header: '読まれた記事ランキング',
      lastUpdated: '最終更新:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'よく見られています',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: false,
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/japanese/help-49677253',
        text: 'BBCニュースが信頼できる理由',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/japanese/help-33991539',
        text: '本サイトの外部リンク方針はこちら',
      },
      links: [
        {
          href: 'https://www.bbc.com/japanese/help-33991540',
          text: '利用条件',
        },
        {
          href: 'https://www.bbcworldnews-japan.com/about_us/',
          text: 'BBCについて',
        },
        {
          href: 'https://www.bbc.com/japanese/help-33991542',
          text: '個人情報取り扱い方針',
        },
        {
          href: 'https://www.bbc.co.uk/usingthebbc/cookies/',
          text: 'クッキー',
        },
        {
          href: 'https://www.bbc.co.uk/contact',
          text: 'BBCに連絡する',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText: 'BBC.　BBCは外部サイトの内容に責任を負いません。',
    },
    fonts: [],
    timezone: 'Asia/Tokyo',
    navigation: [
      {
        title: 'ホーム',
        url: '/japanese',
      },
      {
        title: 'コロナウイルス',
        url: '/japanese/52137815',
      },
      {
        title: '米大統領選',
        url: '/japanese/53969845',
      },
      {
        title: '日本',
        url: '/japanese/topics/cyx5k201n3qt',
      },
      {
        title: 'アジア',
        url: '/japanese/topics/cyx5k20kvd2t',
      },
      {
        title: 'イギリス',
        url: '/japanese/topics/c95y3gk44nyt',
      },
      {
        title: 'アメリカ',
        url: '/japanese/topics/cdr56kqdr70t',
      },
      {
        title: '解説・読み物',
        url: '/japanese/features-and-analysis-54539120',
      },
      {
        title: 'ビデオ',
        url: '/japanese/video-55128146',
      },
      {
        title: 'ワールドニュースTV',
        url: 'https://www.bbcworldnews-japan.com/',
      },
    ],
  },
};

export default withContext(service);
