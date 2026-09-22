export const LICENSE_LAST_UPDATED = 'September 22, 2026'

export const LICENSE_INTRO = [
  'This End User License Agreement (the "Agreement") is a legally binding contract between you (either an individual or a single legal entity, "You" or "Licensee") and Baraa Khaled (the "Licensor"), regarding your use of the Animoia software application and its Paid Plugins.',
  'BY DOWNLOADING, INSTALLING, COPYING, ACTIVATING, OR OTHERWISE USING ANIMOIA OR ANY PAID PLUGIN, YOU AGREE TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT INSTALL OR USE THE SOFTWARE.',
]

export type LicenseBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

export type LicenseSection = {
  number: number
  title: string
  blocks: LicenseBlock[]
}

const p = (text: string): LicenseBlock => ({ type: 'paragraph', text })
const list = (items: string[]): LicenseBlock => ({ type: 'list', items })

export const LICENSE_SECTIONS: LicenseSection[] = [
  {
    number: 1,
    title: 'Definitions',
    blocks: [
      list([
        '"Animoia" or "Application" means the Animoia desktop application, a GPU-accelerated motion graphics and compositing tool, including all files, media, documentation, and updates provided by the Licensor.',
        '"Paid Plugin" means any optional, separately purchased extension, effect, module, or feature pack designed to run inside Animoia that requires a License Key to be activated.',
        '"Software" means Animoia and any Paid Plugins, collectively.',
        '"License Key" means the unique alphanumeric key delivered to You upon purchase of a Paid Plugin through the Licensor\'s authorized storefront (currently Gumroad).',
        '"Activation" means the one-time process of validating a License Key with the Licensor\'s license server and binding it to a Device.',
        '"Device" means a single physical or virtual computer on which the Software is installed.',
        '"Output" means any image, video, animation, composition, project file, or other content You create using the Software.',
      ]),
    ],
  },
  {
    number: 2,
    title: 'The Free Application',
    blocks: [
      p('2.1 Free license. Subject to this Agreement, the Licensor grants You a non-exclusive, non-transferable, worldwide, royalty-free license to install and use Animoia on any number of Devices You own or control, for personal or commercial purposes, free of charge.'),
      p('2.2 Fully offline. Animoia does not require an internet connection, account, or registration to install or use. The Application does not collect analytics, telemetry, or usage data. The ONLY feature of the Software that requires an internet connection is the one-time Activation (and optional Deactivation) of a Paid Plugin, as described in Section 4.'),
      p('2.3 No obligation. The free Application is provided as a courtesy. The Licensor may modify, add, or remove features of the free Application at any time without notice.'),
    ],
  },
  {
    number: 3,
    title: 'Paid Plugins',
    blocks: [
      p('3.1 Perpetual license. Upon purchase of a Paid Plugin and receipt of a valid License Key, the Licensor grants You a perpetual, non-exclusive, non-transferable license to install and use that Paid Plugin inside Animoia, subject to the Device limits and restrictions in this Agreement. Your license does not expire and is not a subscription.'),
      p('3.2 Device limit. Each License Key may be activated on a maximum of two (2) Devices at the same time.'),
      p('3.3 Who may use a License Key. A single License Key may be used by EITHER:'),
      list([
        '(a) one (1) named individual on up to two of their own Devices; OR',
        '(b) one (1) business seat, meaning a company or organization may purchase a License Key and assign it to one employee or contractor at a time. The key may be reassigned to a different person only when the previous person has stopped using it and has deactivated their Devices.',
      ]),
      p('A License Key may never be used concurrently by more than one person, and may not be pooled, shared, or placed on a shared or network-accessible machine for use by multiple users.'),
      p('3.4 One-time purchase. Paid Plugins are one-time purchases. There are no recurring fees for continued use of a Paid Plugin You have already purchased.'),
    ],
  },
  {
    number: 4,
    title: 'Activation, Deactivation, and Data',
    blocks: [
      p('4.1 One-time online Activation. To enable a Paid Plugin, You must enter Your License Key in Animoia while connected to the internet. Activation happens once per Device. After successful Activation, the Paid Plugin works fully offline and no further connection is required.'),
      p('4.2 Data transmitted during Activation. During Activation and Deactivation only, the Software transmits the following to the Licensor\'s license server:'),
      list([
        'Your License Key;',
        'a hashed, anonymized Device identifier derived from Your hardware, which cannot be reversed to identify Your hardware components; and',
        'the name of the Device as set in Your operating system (for example "Baraa\'s PC"), so that You can recognize Your Devices when managing activations.',
      ]),
      p('No other personal information, files, project data, or usage statistics are transmitted. The Licensor stores this information solely to enforce the Device limit in Section 3.2 and to allow You to manage Your activations. The Licensor does not sell or share this data with third parties, except as required by law.'),
      p('4.3 Self-service Deactivation. You may deactivate a Device at any time from within Animoia (an internet connection is required for this step) to free up an activation slot, for example when replacing or reinstalling a computer. Once deactivated, the Paid Plugin will stop functioning on that Device until it is activated again.'),
      p('4.4 Lost access. If a Device is lost, stolen, or destroyed before it could be deactivated, contact the Licensor at the address in Section 13 and the Licensor will, at its reasonable discretion, reset the activation.'),
      p('4.5 Storefront data. Your purchase is processed by the storefront (Gumroad, Inc.) under its own terms and privacy policy. The Licensor receives the purchase information that the storefront provides to sellers (such as Your email and the generated License Key) in order to deliver and support Your purchase.'),
    ],
  },
  {
    number: 5,
    title: 'Ownership of Output',
    blocks: [
      p('5.1 You own everything You make. You retain 100% ownership of all Output You create with the Software, including all intellectual property rights in it.'),
      p('5.2 Commercial use permitted. You may use, publish, sell, license, and distribute Your Output for any purpose, including commercial purposes, without any royalty, fee, or attribution obligation to the Licensor.'),
      p('5.3 No claim by Licensor. The Licensor claims no rights in Your Output and does not receive, view, or store Your Output.'),
    ],
  },
  {
    number: 6,
    title: 'Restrictions',
    blocks: [
      p('You may not, and may not permit any third party to:'),
      list([
        '(a) reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code, algorithms, or shader code of the Software, except to the extent that applicable law expressly permits such activity notwithstanding this limitation;',
        '(b) redistribute, resell, rent, lease, lend, sublicense, or share any Paid Plugin or License Key, including publishing a License Key on any website, forum, torrent, key-sharing service, or bundle, or transferring it to another person other than as permitted in Section 3.3(b);',
        '(c) circumvent, disable, or tamper with the license verification, Activation, Device identification, or any other technical protection mechanism of the Software, including through cracks, patches, key generators, license-server emulation, or spoofing of Device identifiers;',
        '(d) remove or alter any copyright, trademark, or other proprietary notices in the Software; or',
        '(e) use the Software or any Output to commit, promote, facilitate, assist, or conceal any unlawful or criminal act, or otherwise use the Software or any Output in violation of any applicable local, national, or international law or regulation.',
      ]),
      p('The free Application may be freely downloaded and shared in its original, unmodified installer form; however, You may not distribute modified builds or represent them as official.'),
    ],
  },
  {
    number: 7,
    title: 'Intellectual Property',
    blocks: [
      p('The Software is licensed, not sold. The Licensor and its licensors retain all right, title, and interest in and to the Software, including all copyrights, trademarks (including the name "Animoia" and its logo), and trade secrets. All rights not expressly granted in this Agreement are reserved. Third-party open-source components included in the Software are licensed under their own terms, which are listed in the Application\'s about or licenses section and take precedence for those components.'),
    ],
  },
  {
    number: 8,
    title: 'Updates and Support',
    blocks: [
      p('8.1 Updates. The Licensor may, at its sole discretion, release updates, bug fixes, and new versions of Animoia and of Paid Plugins. Updates to a Paid Plugin You have purchased are provided free of charge. The Licensor is under no obligation to release any update or to maintain compatibility with any specific operating system or hardware.'),
      p('8.2 Support. The Licensor may provide support by email on a best-effort basis. No support service level, response time, or resolution is guaranteed.'),
      p('8.3 Discontinuation. If the Licensor discontinues a Paid Plugin, Your existing perpetual license and activations remain valid for the versions You have already downloaded.'),
    ],
  },
  {
    number: 9,
    title: 'Refunds',
    blocks: [
      p('9.1 Because Paid Plugins are digital goods that are delivered instantly and can be activated immediately, all sales are final, except as set out below.'),
      p('9.2 Non-functional plugin. If a Paid Plugin fails to work on a Device that meets the published system requirements due to a defect in the Paid Plugin, and the Licensor is unable to provide a fix within a reasonable time after You report the problem with sufficient detail to reproduce it, You are entitled to a full refund of the purchase price. Refunds are processed through the storefront.'),
      p('9.3 Nothing in this Section limits any non-waivable rights You may have under applicable consumer protection law.'),
    ],
  },
  {
    number: 10,
    title: 'Disclaimer of Warranties',
    blocks: [
      p('TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND. THE LICENSOR EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTY THAT THE SOFTWARE WILL BE ERROR-FREE, UNINTERRUPTED, OR COMPATIBLE WITH YOUR HARDWARE, DRIVERS, OR OPERATING SYSTEM. GPU-ACCELERATED SOFTWARE DEPENDS HEAVILY ON THIRD-PARTY GRAPHICS DRIVERS THAT ARE OUTSIDE THE LICENSOR\'S CONTROL.'),
    ],
  },
  {
    number: 11,
    title: 'Limitation of Liability',
    blocks: [
      p('TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE LICENSOR BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, PROJECTS, PROFITS, REVENUE, OR BUSINESS, ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE USE OF OR INABILITY TO USE THE SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.'),
      p('THE LICENSOR\'S TOTAL AGGREGATE LIABILITY UNDER THIS AGREEMENT SHALL NOT EXCEED THE AMOUNT YOU ACTUALLY PAID TO THE LICENSOR FOR THE PAID PLUGIN GIVING RISE TO THE CLAIM IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR, FOR THE FREE APPLICATION, ZERO (0).'),
      p('Some jurisdictions do not allow the exclusion or limitation of certain damages; in such jurisdictions, the Licensor\'s liability is limited to the greatest extent permitted by law. You are responsible for backing up Your projects and Output.'),
    ],
  },
  {
    number: 12,
    title: 'Term and Termination',
    blocks: [
      p('12.1 This Agreement is effective until terminated.'),
      p('12.2 Your rights under this Agreement terminate automatically, without notice, if You materially breach Section 3.3 or Section 6. Upon termination, You must cease all use of the Paid Plugins and destroy all copies. The Licensor may revoke License Keys that have been shared, leaked, resold, or obtained through fraud or chargeback.'),
      p('12.3 Sections 5, 7, 9.3, 10, 11, 12, 14, and 15 survive termination.'),
    ],
  },
  {
    number: 13,
    title: 'Contact',
    blocks: [
      p('Questions, support requests, deactivation resets, and refund requests may be sent to:'),
      p('Baraa Khaled\nEmail: baraa@animoia.com'),
    ],
  },
  {
    number: 14,
    title: 'Governing Law and Disputes',
    blocks: [
      p('This Agreement is governed by the laws of the Arab Republic of Egypt, without regard to its conflict-of-law principles. Any dispute arising out of or relating to this Agreement shall be subject to the exclusive jurisdiction of the competent courts of Egypt. If You are a consumer residing in a jurisdiction whose mandatory consumer protection laws grant You additional rights or a different forum, nothing in this Section deprives You of those rights.'),
    ],
  },
  {
    number: 15,
    title: 'General',
    blocks: [
      p('15.1 Entire agreement. This Agreement is the entire agreement between You and the Licensor regarding the Software and supersedes all prior agreements or communications.'),
      p('15.2 Severability. If any provision is held unenforceable, the remaining provisions remain in full force, and the unenforceable provision will be enforced to the maximum extent permitted.'),
      p('15.3 No waiver. The Licensor\'s failure to enforce any provision is not a waiver of the right to enforce it later.'),
      p('15.4 Assignment. You may not assign this Agreement or any License Key except as permitted in Section 3.3(b). The Licensor may assign this Agreement to a successor of the Animoia business.'),
      p('15.5 Changes to this Agreement. The Licensor may update this Agreement for future versions of the Software. Changes will not reduce the rights You have already acquired in Paid Plugins purchased under a prior version. Continued use of an updated version of the Software constitutes acceptance of the updated Agreement.'),
      p('15.6 Export. You agree to comply with all applicable export and sanctions laws when using the Software.'),
      p('15.7 Language. This Agreement is written in English. Any translation is provided for convenience only; the English version controls.'),
    ],
  },
]

export const LICENSE_CLOSING = [
  'Animoia and the Animoia logo are trademarks of Baraa Khaled. All other trademarks are the property of their respective owners.',
  'Copyright (c) 2026 Baraa Khaled. All rights reserved.',
]
