import type { LicenseBlock, LicenseSection } from '@/lib/license'

export const PRIVACY_LAST_UPDATED = 'September 28, 2026'

export const PRIVACY_INTRO = [
  'This Privacy Policy explains what information Baraa Khaled ("we," "us," or the "Licensor") collects when you ("You") use the Animoia desktop application, its Paid Plugins, and the animoia.com website; why that information is collected; and what choices You have. It should be read together with the Animoia End User License Agreement, and it uses the same defined terms (such as "License Key," "Activation," and "Device").',
  'The short version: Animoia is an offline application. It has no accounts and no analytics, telemetry, or tracking. Your projects and Output never leave Your computer. The only time the Software contacts us is when You activate or deactivate a Paid Plugin.',
]

const p = (text: string): LicenseBlock => ({ type: 'paragraph', text })
const list = (items: string[]): LicenseBlock => ({ type: 'list', items })

export const PRIVACY_SECTIONS: LicenseSection[] = [
  {
    number: 1,
    title: 'Who Is Responsible',
    blocks: [
      p('The data controller responsible for Your information is Baraa Khaled, the independent developer of Animoia. You can contact us about anything in this Privacy Policy at baraa@animoia.com.'),
    ],
  },
  {
    number: 2,
    title: 'Information That Stays on Your Device',
    blocks: [
      p('You do not need an internet connection, an account, or any registration to install or use Animoia. The Application does not collect analytics, telemetry, crash reports, or usage data, and it does not check for updates in the background.'),
      p('Everything the Application needs to remember is stored locally on Your Device and is never transmitted to us, including:'),
      list([
        'Your projects, imported footage, images, audio, fonts, and all Output;',
        'Your preferences, recent-projects list, saved presets, easing curves, and similar editor settings; and',
        'a local diagnostics file (diagnostics.txt, in the Application\'s log folder) that records window and startup events, which is created only on Your computer, is never uploaded, and is shared only if You choose to send it to us when asking for support.',
      ]),
      p('You can delete this local data at any time by removing the Application\'s user-data folder or by uninstalling Animoia.'),
    ],
  },
  {
    number: 3,
    title: 'Information Sent During Activation',
    blocks: [
      p('When You activate or deactivate a Paid Plugin, and only then, the Application sends the following information to our license server:'),
      list([
        'Your License Key;',
        'a Device identifier, which is a one-way hash generated on Your computer; it cannot be reversed to reveal Your hardware details or any other information about You;',
        'a Device name made up of Your computer\'s hostname and operating system (for example, "studio-pc (Windows)"), so that You can tell Your Devices apart when managing activations; and',
        'the version of Animoia that You are running.',
      ]),
      p('For each activated Device, the server stores these values together with the Paid Plugin they belong to and the date and time of the Activation. No files, project data, usage statistics, or other personal information are ever transmitted.'),
      p('To confirm that a License Key is genuine, the license server sends the License Key, along with the product it is being checked against, to Gumroad\'s license verification service. Gumroad tells us whether the purchase is valid or whether it has been refunded, disputed, charged back, or cancelled. It does not tell us anything about Your Device.'),
    ],
  },
  {
    number: 4,
    title: 'IP Addresses and Abuse Prevention',
    blocks: [
      p('As with any internet request, an Activation or Deactivation reveals Your IP address to the license server. We do not store IP addresses for successful requests.'),
      p('For unsuccessful Activation attempts, we temporarily record the IP address and time to protect the license service from misuse. These records are kept only briefly and are then deleted.'),
      p('Cloudflare, our hosting provider, may also keep short-lived operational request logs (for example, the time, route, and status of a request) for security and troubleshooting purposes, as described in Section 7.'),
    ],
  },
  {
    number: 5,
    title: 'Purchases and Donations',
    blocks: [
      p('Paid Plugins and donations are sold and processed by Gumroad, Inc., which acts under its own terms and privacy policy. We never see or store Your payment card details.'),
      p('Gumroad shares with us the purchase information that it provides to all sellers, such as Your email address, the product purchased, the price paid, and the generated License Key. We use this information only to deliver Your purchase, provide support, handle refunds, and meet our legal and tax obligations.'),
      p('The donation page on our website loads Gumroad\'s checkout script so that You can complete a donation without leaving the page. When You use it, Gumroad may set its own cookies and collect information in accordance with its privacy policy.'),
    ],
  },
  {
    number: 6,
    title: 'The Website',
    blocks: [
      p('The animoia.com website does not use analytics, advertising, or tracking cookies, and it does not ask You to create an account.'),
      p('As with any website, Cloudflare, which hosts animoia.com, and our font provider automatically process standard technical information (such as Your IP address, browser type, and the pages You request) in order to deliver pages and fonts and protect the service from abuse.'),
      p('Links to Gumroad, YouTube, documentation, and other third-party sites take You to services that have their own privacy practices, which we do not control.'),
      p('If You email us, we receive Your email address and anything You choose to include in Your message, and we use it only to respond to You.'),
    ],
  },
  {
    number: 7,
    title: 'Service Providers',
    blocks: [
      p('We rely on a small number of providers that process data on our behalf or independently:'),
      list([
        'Cloudflare, Inc. hosts the animoia.com website, the license server (Cloudflare Workers), and the license server\'s database (Cloudflare D1), where activation records are stored.',
        'Gumroad, Inc. provides our storefront, payment processing, License Key issuance, and License Key verification.',
        'Adobe Inc. provides website fonts.',
      ]),
      p('We do not sell, rent, or trade Your personal information, and we do not share it for advertising. We disclose information to anyone other than the providers above only when required by law or when necessary to protect our rights, such as in response to fraud.'),
    ],
  },
  {
    number: 8,
    title: 'Why We Process Your Information',
    blocks: [
      p('We process the information described above only for the following purposes and, where applicable law requires one, on the following legal grounds:'),
      list([
        'Activating Paid Plugins, enforcing the Device limit set out in the EULA, and letting You view and release Your activations. This is necessary to perform our contract with You.',
        'Verifying purchases and revoking activations for refunded or charged-back purchases. This is necessary to perform our contract with You and is in our legitimate interest in preventing fraud.',
        'Protecting the license service from misuse. This is in our legitimate interest in keeping the service secure.',
        'Responding to support requests and keeping purchase records. This is necessary to perform our contract with You and to comply with our legal obligations.',
      ]),
    ],
  },
  {
    number: 9,
    title: 'How Long We Keep Information',
    blocks: [
      list([
        'Activation records are kept for as long as the Device remains activated. They are deleted immediately when You deactivate that Device, when we reset it at Your request, or when the purchase is found to have been refunded, charged back, or revoked.',
        'Records of unsuccessful Activation attempts are kept only for a short period and are then deleted.',
        'Purchase records received from Gumroad are kept for as long as needed to support Your purchase and to meet our legal, tax, and accounting obligations.',
        'Support emails are kept in our email inbox as a record of Your support history. You can ask us to delete them at any time.',
      ]),
    ],
  },
  {
    number: 10,
    title: 'Security',
    blocks: [
      p('We limit the personal information we collect and take reasonable measures to protect it.'),
      p('No method of transmission or storage is completely secure. If a breach affects Your information, we will notify You and the relevant authorities where required by law.'),
    ],
  },
  {
    number: 11,
    title: 'International Transfers',
    blocks: [
      p('We are based in Egypt, and our service providers operate globally. Cloudflare processes requests at the network location nearest to You, and our other providers are based in the United States. As a result, Your information may be processed outside Your country of residence. Where the law requires it, we rely on our providers\' contractual safeguards, such as Standard Contractual Clauses, to protect these transfers.'),
    ],
  },
  {
    number: 12,
    title: 'Your Rights',
    blocks: [
      p('Depending on where You live (including under the EU and UK GDPR, the California Consumer Privacy Act, and Egypt\'s Personal Data Protection Law No. 151 of 2020), You may have the right to:'),
      list([
        'access the personal information we hold about You and receive a copy of it;',
        'correct inaccurate information;',
        'delete Your information, including by deactivating Your Devices from within Animoia at any time;',
        'object to, or ask us to restrict, processing based on our legitimate interests;',
        'receive Your information in a portable format; and',
        'lodge a complaint with Your local data protection authority.',
      ]),
      p('To exercise any of these rights, email baraa@animoia.com from the address used for Your purchase, or include Your License Key so that we can locate Your records. We will respond within the time required by applicable law, and we will not treat You differently for exercising Your rights. We do not sell or "share" personal information, as those terms are defined under California law.'),
    ],
  },
  {
    number: 13,
    title: 'Children',
    blocks: [
      p('The Software and the website are not directed at children under 13 (or under 16, where local law sets a higher age), and we do not knowingly collect personal information from them. If You believe that a child has given us personal information, please contact us, and we will delete it.'),
    ],
  },
  {
    number: 14,
    title: 'Changes to This Policy',
    blocks: [
      p('We may update this Privacy Policy when the Software or our service providers change. The "Last updated" date at the top of this page shows when it was last revised. If a change materially expands the information we collect, we will announce it in the changelog or release notes before it takes effect.'),
    ],
  },
  {
    number: 15,
    title: 'Contact',
    blocks: [
      p('For questions about this Privacy Policy or Your information, please contact:'),
      p('Baraa Khaled\nEmail: baraa@animoia.com'),
    ],
  },
]

export const PRIVACY_CLOSING = [
  'This Privacy Policy is written in English. Any translation is provided for convenience only, and the English version controls.',
]
