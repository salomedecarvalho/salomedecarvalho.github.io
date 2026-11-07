import { profile } from './profile'

/**
 * Privacy policy content, English and German.
 * Not legal advice: review it (or compare with a generator such as eRecht24 / Datenschutz-Generator)
 * whenever the site changes, e.g. when analytics, a video host or embeds are added.
 */

export type Lang = 'en' | 'de'

/** `lines` renders plain stacked lines without bullets, e.g. a postal address. */
export type Block = string | { list: string[] } | { lines: string[] } | { link: string; href: string }

export interface PolicySection {
  heading: string
  body: Block[]
}

export interface Policy {
  title: string
  updated: string
  back: string
  sections: PolicySection[]
}

/** Same contact details as the Impressum. */
const controller = (country: string) => [profile.legalName, ...profile.legalAddress, country, profile.email]

const authority =
  'Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Postfach 31 63, 65021 Wiesbaden'

export const privacyPolicy: Record<Lang, Policy> = {
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: November 2026',
    back: 'Back to the portfolio',
    sections: [
      {
        heading: 'Who is responsible',
        body: [
          'The person responsible for processing personal data on this website (the "controller" under the EU General Data Protection Regulation, GDPR) is:',
          { list: controller('Germany') },
        ],
      },
      {
        heading: 'The short version',
        body: [
          'This is a personal portfolio. It uses no cookies, no analytics or tracking tools, no advertising and no contact form. Fonts and images are hosted together with the website, so your browser does not load anything from third-party services while you browse.',
          'Personal data is only processed in two situations: technically, by the hosting provider, when you visit the site, and when you send me an email.',
        ],
      },
      {
        heading: 'Hosting (GitHub Pages)',
        body: [
          'This website is hosted on GitHub Pages, a service of GitHub B.V. (Prins Bernhardplein 200, 1097 JB Amsterdam, Netherlands) and GitHub, Inc. (88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA).',
          'When you open the website, GitHub’s servers process the technical data needed to deliver it, in particular your IP address, the date and time of the request, the page requested and information about your browser. According to GitHub, the IP address of visitors to GitHub Pages sites is logged and stored for security purposes. I have no access to this data.',
          'Legal basis: Art. 6(1)(f) GDPR. I have a legitimate interest in presenting my portfolio in a secure and reliable way.',
          'Data may be processed in the USA. GitHub states that it complies with the EU-U.S. Data Privacy Framework. More information:',
          { link: 'GitHub General Privacy Statement', href: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement' },
        ],
      },
      {
        heading: 'Contacting me by email',
        body: [
          'If you write to me, including through the "Request full access" button (which opens your own email app with a pre-filled message), I process the data you send: usually your name, email address, your message and anything else you choose to share.',
          'I use this data only to answer your request and, where relevant, in connection with a possible job opportunity or collaboration. Legal basis: Art. 6(1)(b) GDPR (steps taken at your request before entering into a contract) and Art. 6(1)(f) GDPR (my legitimate interest in answering messages).',
          'I delete your messages once they are no longer needed for this purpose, unless legal retention periods apply.',
          'My email account is provided by Google (Gmail), so emails are also processed on Google’s servers. More information:',
          { link: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
        ],
      },
      {
        heading: 'Links to other websites',
        body: [
          'This website links to my profiles on LinkedIn and Instagram. These are plain links: no data is sent to these platforms until you click on one. Once you are on their websites, their own privacy policies apply.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'Under the GDPR you have the right to:',
          {
            list: [
              'access the personal data I hold about you (Art. 15)',
              'have incorrect data corrected (Art. 16)',
              'have your data deleted (Art. 17)',
              'restrict how your data is processed (Art. 18)',
              'receive your data in a portable format (Art. 20)',
              'object to processing based on legitimate interests (Art. 21)',
            ],
          },
          `To use any of these rights, just email me at ${profile.email}.`,
          `You also have the right to lodge a complaint with a data protection supervisory authority. The authority responsible for me is: ${authority} (www.datenschutz.hessen.de).`,
        ],
      },
      {
        heading: 'Good to know',
        body: [
          'You can browse this website without giving me any personal data. Apart from the technical data processed by the host, providing data is voluntary. No automated decision-making or profiling takes place.',
          'I will update this policy if the website changes, for example if I add new services.',
        ],
      },
    ],
  },

  de: {
    // \u00AD = soft hyphen, so the long word can break nicely on narrow screens
    title: 'Datenschutz\u00ADerklärung',
    updated: 'Stand: November 2026',
    back: 'Zurück zum Portfolio',
    sections: [
      {
        heading: 'Verantwortliche',
        body: [
          'Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:',
          { list: controller('Deutschland') },
        ],
      },
      {
        heading: 'Das Wichtigste in Kürze',
        body: [
          'Diese Website ist ein persönliches Portfolio. Sie verwendet keine Cookies, keine Analyse- oder Tracking-Tools, keine Werbung und kein Kontaktformular. Schriften und Bilder werden zusammen mit der Website ausgeliefert. Ihr Browser lädt beim Besuch also nichts von Drittanbietern.',
          'Personenbezogene Daten werden nur in zwei Fällen verarbeitet: technisch durch den Hosting-Anbieter, wenn Sie die Website aufrufen, und wenn Sie mir eine E-Mail schreiben.',
        ],
      },
      {
        heading: 'Hosting (GitHub Pages)',
        body: [
          'Diese Website wird bei GitHub Pages gehostet, einem Dienst der GitHub B.V. (Prins Bernhardplein 200, 1097 JB Amsterdam, Niederlande) und der GitHub, Inc. (88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA).',
          'Beim Aufruf der Website verarbeiten die Server von GitHub die technisch notwendigen Daten, insbesondere Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite sowie Informationen zu Ihrem Browser. Laut GitHub wird die IP-Adresse von Besucherinnen und Besuchern von GitHub-Pages-Websites aus Sicherheitsgründen protokolliert und gespeichert. Ich selbst habe keinen Zugriff auf diese Daten.',
          'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in einer sicheren und zuverlässigen Darstellung meines Portfolios.',
          'Eine Verarbeitung in den USA ist möglich. GitHub gibt an, das EU-U.S. Data Privacy Framework einzuhalten. Weitere Informationen:',
          { link: 'GitHub General Privacy Statement', href: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement' },
        ],
      },
      {
        heading: 'Kontakt per E-Mail',
        body: [
          'Wenn Sie mir schreiben, auch über den Button „Request full access“ (er öffnet Ihr eigenes E-Mail-Programm mit einer vorausgefüllten Nachricht), verarbeite ich die Daten, die Sie mir senden: in der Regel Ihren Namen, Ihre E-Mail-Adresse, Ihre Nachricht und alles, was Sie zusätzlich mitteilen.',
          'Ich nutze diese Daten ausschließlich, um Ihre Anfrage zu beantworten und gegebenenfalls im Zusammenhang mit einer möglichen Stelle oder Zusammenarbeit. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf Ihre Anfrage) und Art. 6 Abs. 1 lit. f DSGVO (mein berechtigtes Interesse an der Beantwortung von Nachrichten).',
          'Ich lösche Ihre Nachrichten, sobald sie für diesen Zweck nicht mehr benötigt werden, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.',
          'Mein E-Mail-Postfach wird von Google (Gmail) bereitgestellt. E-Mails werden daher auch auf Servern von Google verarbeitet. Weitere Informationen:',
          { link: 'Google Datenschutzerklärung', href: 'https://policies.google.com/privacy?hl=de' },
        ],
      },
      {
        heading: 'Links zu anderen Websites',
        body: [
          'Diese Website verlinkt auf meine Profile bei LinkedIn und Instagram. Es handelt sich um einfache Links: Erst wenn Sie darauf klicken, werden Daten an diese Plattformen übermittelt. Auf deren Websites gelten die jeweiligen Datenschutzerklärungen.',
        ],
      },
      {
        heading: 'Ihre Rechte',
        body: [
          'Nach der DSGVO haben Sie das Recht auf:',
          {
            list: [
              'Auskunft über Ihre bei mir gespeicherten Daten (Art. 15)',
              'Berichtigung unrichtiger Daten (Art. 16)',
              'Löschung Ihrer Daten (Art. 17)',
              'Einschränkung der Verarbeitung (Art. 18)',
              'Datenübertragbarkeit (Art. 20)',
              'Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21)',
            ],
          },
          `Um eines dieser Rechte auszuüben, schreiben Sie mir einfach an ${profile.email}.`,
          `Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für mich zuständig ist: ${authority} (www.datenschutz.hessen.de).`,
        ],
      },
      {
        heading: 'Gut zu wissen',
        body: [
          'Sie können diese Website nutzen, ohne mir personenbezogene Daten mitzuteilen. Abgesehen von den technischen Daten beim Hosting ist die Angabe von Daten freiwillig. Eine automatisierte Entscheidungsfindung oder ein Profiling findet nicht statt.',
          'Ich passe diese Datenschutzerklärung an, wenn sich die Website ändert, zum Beispiel wenn neue Dienste hinzukommen.',
        ],
      },
    ],
  },
}
