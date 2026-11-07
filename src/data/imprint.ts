import { profile } from './profile'
import type { Lang, Policy } from './privacy'

/**
 * Impressum (legal notice) under § 5 DDG, English and German.
 * The address is a serviceable c/o address from Dein Impressum: keep the c/o line unchanged.
 * Not legal advice: check it again if the site becomes commercial (e.g. freelance work, a VAT ID).
 */

const identity = [profile.legalName, ...profile.legalAddress]

export const imprint: Record<Lang, Policy> = {
  en: {
    title: 'Imprint',
    updated: 'Legal notice (Impressum) · Last updated: November 2026',
    back: 'Back to the portfolio',
    sections: [
      {
        heading: 'Information under § 5 DDG',
        body: [
          { lines: [...identity, 'Germany'] },
          'This legal notice also applies to my Instagram profile @art_and_sparkles (instagram.com/art_and_sparkles).',
        ],
      },
      {
        heading: 'Contact',
        body: [{ lines: [`Email: ${profile.email}`] }],
      },
      {
        heading: 'Responsible for content',
        body: [
          'Responsible for the content of this website under § 18(2) of the German Interstate Media Treaty (MStV):',
          { lines: identity },
        ],
      },
      {
        heading: 'Liability for content',
        body: [
          'I create the content of this website with great care. I cannot, however, guarantee that it is accurate, complete and up to date at all times. As a service provider I am responsible for my own content on these pages under the general laws (§ 7(1) DDG).',
        ],
      },
      {
        heading: 'Links to my social media profiles',
        body: [
          'This website links to my own profiles on LinkedIn and Instagram. I am responsible for the content I publish there myself. The platforms are run by their own operators (LinkedIn Ireland Unlimited Company and Meta Platforms Ireland Ltd.), and their terms of use and privacy policies apply. I have no influence on how these platforms work or on content posted there by others, such as comments.',
        ],
      },
      {
        heading: 'Copyright',
        body: [
          'The designs, illustrations, photos and texts on this website are protected by copyright. Unless stated otherwise, they may not be copied, edited or used outside the limits of copyright law without my written permission. Rights to work created for clients may lie with the respective client.',
        ],
      },
    ],
  },

  de: {
    title: 'Impressum',
    updated: 'Stand: November 2026',
    back: 'Zurück zum Portfolio',
    sections: [
      {
        heading: 'Angaben gemäß § 5 DDG',
        body: [
          { lines: [...identity, 'Deutschland'] },
          'Dieses Impressum gilt auch für mein Instagram-Profil @art_and_sparkles (instagram.com/art_and_sparkles).',
        ],
      },
      {
        heading: 'Kontakt',
        body: [{ lines: [`E-Mail: ${profile.email}`] }],
      },
      {
        heading: 'Verantwortlich für den Inhalt',
        body: ['Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:', { lines: identity }],
      },
      {
        heading: 'Haftung für Inhalte',
        body: [
          'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.',
        ],
      },
      {
        heading: 'Links zu meinen Social-Media-Profilen',
        body: [
          'Diese Website verlinkt auf meine eigenen Profile bei LinkedIn und Instagram. Für die Inhalte, die ich dort selbst veröffentliche, bin ich verantwortlich. Die Plattformen werden von ihren jeweiligen Betreibern (LinkedIn Ireland Unlimited Company bzw. Meta Platforms Ireland Ltd.) betrieben; es gelten deren Nutzungsbedingungen und Datenschutzerklärungen. Auf die Funktionsweise der Plattformen und auf Inhalte Dritter, etwa Kommentare, habe ich keinen Einfluss.',
        ],
      },
      {
        heading: 'Urheberrecht',
        body: [
          'Die Designs, Illustrationen, Fotos und Texte auf dieser Website unterliegen dem Urheberrecht. Soweit nicht anders angegeben, dürfen sie ohne meine schriftliche Zustimmung nicht vervielfältigt, bearbeitet oder außerhalb der Grenzen des Urheberrechts verwertet werden. Rechte an Arbeiten, die für Kunden entstanden sind, können beim jeweiligen Auftraggeber liegen.',
        ],
      },
    ],
  },
}
