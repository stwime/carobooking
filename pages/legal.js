import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Waves from '../components/svgs/waves.jsx';

const Navbar = dynamic(() => import('../components/navbar.jsx'), {
  ssr: false,
});

export default function LegalPage() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="relative md:-mt-4 xl:-mt-6 -mt-12 gradient">
        <Waves />
      </div>
      <div className="align-middle flex justify-center pt-6">
        <div className="flex legal container max-w-7xl flex-wrap">
          <div className="p-12 w-full lg:w-1/2">
            <div className="flex align-center text-center">
            <h2 className="inline my-auto">Disclaimer</h2>
            <div className="inline ml-6 my-auto w-16">
              <Image 
                className="object-scale rounded"
                height={66}
                width={100}
                priority={true}
                alt="EU Flag"
                src="/eu_flag.bmp"
              />
              </div>
              </div>
            <p className="lg:invisible visible lg:hidden font-bold">
              For the German "Impressum", scroll down past the International
              Disclaimer
            </p>
            <p>Last updated: April 2021</p>
            <h2>Interpretation</h2>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <h2>Definitions</h2>
            <p>For the purposes of this Disclaimer:</p>
            <ul className="m-6">
              <li>
                <strong>Company</strong> (referred to as either "the Company",
                "We", "Us" or "Our" in this Disclaimer) refers to Carolina
                Kowanz.
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>You</strong> means the individual accessing the Service,
                or the company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </li>
              <li>
                <strong>Website</strong> refers to Carolina Kowanz, accessible
                from carokowanzspanish.com
              </li>
            </ul>
            <h2>Disclaimer</h2>
            <p>
              The information contained on the Service is for general
              information purposes only.
            </p>
            <p>
              The Company assumes no responsibility for errors or omissions in
              the contents of the Service.
            </p>
            <p>
              In no event shall the Company be liable for any special, direct,
              indirect, consequential, or incidental damages or any damages
              whatsoever, whether in an action of contract, negligence or other
              tort, arising out of or in connection with the use of the Service
              or the contents of the Service. The Company reserves the right to
              make additions, deletions, or modifications to the contents on the
              Service at any time without prior notice.
            </p>
            <p>
              The Company does not warrant that the Service is free of viruses
              or other harmful components.
            </p>
            <h2>External Links Disclaimer</h2>
            <p>
              The Service may contain links to external websites that are not
              provided or maintained by or in any way affiliated with the
              Company.
            </p>
            <p>
              Please note that the Company does not guarantee the accuracy,
              relevance, timeliness, or completeness of any information on these
              external websites.
            </p>
            <h2>Errors and Omissions Disclaimer</h2>
            <p>
              The information given by the Service is for general guidance on
              matters of interest only. Even if the Company takes every
              precaution to insure that the content of the Service is both
              current and accurate, errors can occur. Plus, given the changing
              nature of laws, rules and regulations, there may be delays,
              omissions or inaccuracies in the information contained on the
              Service.
            </p>
            <p>
              The Company is not responsible for any errors or omissions, or for
              the results obtained from the use of this information.
            </p>
            <h2>Fair Use Disclaimer</h2>
            <p>
              The Company may use copyrighted material which has not always been
              specifically authorized by the copyright owner. The Company is
              making such material available for criticism, comment, news
              reporting, teaching, scholarship, or research.
            </p>
            <p>
              The Company believes this constitutes a "fair use" of any such
              copyrighted material as provided for in section 107 of the United
              States Copyright law.
            </p>
            <p>
              If You wish to use copyrighted material from the Service for your
              own purposes that go beyond fair use, You must obtain permission
              from the copyright owner.
            </p>
            <h2>Views Expressed Disclaimer</h2>
            <p>
              The Service may contain views and opinions which are those of the
              authors and do not necessarily reflect the official policy or
              position of any other author, agency, organization, employer or
              company, including the Company.
            </p>
            <p>
              Comments published by users are their sole responsibility and the
              users will take full responsibility, liability and blame for any
              libel or litigation that results from something written in or as a
              direct result of something written in a comment. The Company is
              not liable for any comment published by users and reserve the
              right to delete any comment for any reason whatsoever.
            </p>
            <h2>No Responsibility Disclaimer</h2>
            <p>
              The information on the Service is provided with the understanding
              that the Company is not herein engaged in rendering legal,
              accounting, tax, or other professional advice and services. As
              such, it should not be used as a substitute for consultation with
              professional accounting, tax, legal or other competent advisers.
            </p>
            <p>
              In no event shall the Company or its suppliers be liable for any
              special, incidental, indirect, or consequential damages whatsoever
              arising out of or in connection with your access or use or
              inability to access or use the Service.
            </p>
            <h2>"Use at Your Own Risk" Disclaimer</h2>
            <p>
              All information in the Service is provided "as is", with no
              guarantee of completeness, accuracy, timeliness or of the results
              obtained from the use of this information, and without warranty of
              any kind, express or implied, including, but not limited to
              warranties of performance, merchantability and fitness for a
              particular purpose.
            </p>
            <p>
              The Company will not be liable to You or anyone else for any
              decision made or action taken in reliance on the information given
              by the Service or for any consequential, special or similar
              damages, even if advised of the possibility of such damages.
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, You can contact
              Us at: carokowanzspanish@gmail.com
            </p>
          </div>
          <div className="p-12 w-full lg:w-1/2">
          <div className="flex align-center text-center">
            <h2 className="inline my-auto">Impressum</h2>
            <div className="inline ml-6 my-auto w-16">
              <Image 
                className="object-scale rounded"
                height={66}
                width={100}
                priority={true}
                alt="German Flag"
                src="/de_flag.bmp"
              />
              </div>
              </div>

            <p>Zuletzt geändert: April 2021</p>
            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>
              Carolina Kowanz
              <br />
              Gartenfelder Str. 65
              <br />
              13599 Berlin
            </p>
            <h2>Kontakt</h2>
            <p>E-Mail: carokowanzspanish@gmail.com</p>
            <p>Telefon: +49 43963509</p>
            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
              Umsatzsteuergesetz:
              <br />
              DE336750119
            </p>
            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Sprachlehrerin
              <br />
            </p>
            <h2>EU-Streitschlichtung</h2>
            <p>
              Die Europ&auml;ische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <h2>
              Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
            <h3>Haftung f&uuml;r Inhalte</h3>{' '}
            <p>
              Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
              f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte
              oder gespeicherte fremde Informationen zu &uuml;berwachen oder
              nach Umst&auml;nden zu forschen, die auf eine rechtswidrige
              T&auml;tigkeit hinweisen.
            </p>{' '}
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst
              ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              m&ouml;glich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>{' '}
            <h3>Haftung f&uuml;r Links</h3>{' '}
            <p>
              Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
              f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
              &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
              stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
              &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>{' '}
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>{' '}
            <h3>Urheberrecht</h3>{' '}
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
              bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
              f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>{' '}
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
