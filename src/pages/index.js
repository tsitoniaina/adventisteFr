import React, { useState } from "react";
import logo from "../assets/img/logoN.png"
import "bootstrap-icons/font/bootstrap-icons.css";

export default function LandingFepetraPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cards = [
    {
      title: "Fepetra Mialoha",
      icon: "bi-person-check",
      items: [
        "1. Mambra vita batisa sady ara-dalàna ao amin’ny fiangonana Advantista mitandrina ny andro fahafito.",
        "2. Farafahakeliny 16 taona eo am-panombohana ary 18 taona eo am-pamaranana.",
        "3. Nahafeno ny fanamarinana fitondran-tena sy ny fiarovana ny ankizy izay nahazoana alàlana avy tamin’ny Federasiona/Misiona.",
        "4. Mifanakalo hevitra amim-bavaka miaraka amin’ny Mpiahy momba ny dikan’ny hoe Filoha Mpitarika sy antony hitiavanao ho tonga Filoha Mpitarika. Soratana ao anatin’ny takelaka iray ny tatitra atao ao anatin’ny antontam-piraketana.",
        "5. Nahavita ny seminera fiofanana fototra ho an’ny STAFF (BST) ao amin’ny Fiofanana ho amin’ny Asa Fanompoana ny Klioba CMT na ny mitovy amin’izany ho an’ny Mpitarika Mpisantatra."
      ],
    },
    {
      title: "Fitarihana sy Fivelarana",
      icon: "bi-mortarboard",
      items: [
        "1. Mahavita ny tsirairay avy amin'ireto seminera fiofanana manaraka ireto (fankatoavin'ny Federasiona/Misiona) :",
        "- Vina, Iraka, Hery manosika",
        "- Fitarihana kristiana",
        "- Fitsipi-pifehezana & Maha-mpianatra",
        "- Asa fitoriana amin’ny ankizy sy tanora",
        "- Mamorona fanompoam-pivavahana mahomby",
        "- Fifandraisana: Petra-kevitra & Fampiharana",
        "- Fanabeazana: Petra-kevitra & Fampiharana",
        "- Loharanon-kevitra ho amin’ny fampianarana tia karokaroka",
        
        "2. Mamaky na mihaino ny boky Fanabeazana nosoratan’i Ellen White ary manoratra fisaintsainana pejy iray mahakasika izay nianarana sy ny fomba fampiharana izany amin’ny asa fanompoana.",
        
        "3. Mamaky na mihaino boky iray mahasika ny fahaiza-mitarika Advantista nosafidian'ny Federasiona/Misiona ary manao anankiroa amin'ireo safidy ao amin'ny Sehatry ny Fizarana.",
        
        "4. Mahavita ny fanadihadiana mahakasika ny tsirairay amin’ireto manaraka ireto ary manoratra fisaintsainana pejy roa :",
        "- Fanomezam-pahasoavana",
        "- Tamba-toetra (personalités)",
        
        "5. Mandray anjara mavitrika amin’ny fiaraha-miasa amin’ny Mpisantatra na Mpisavalàlana farafahakeliny herintaona na mampianatra sekoly sabatan'ireo salan-taona ireo. Mahavita ireto zavatra ireto :",
        "- Manatrika 75% amin’ny fivoriana rehetra ataon’ny STAFF",
        "- Manana Mari-pankasitrahana 3 amin’ny Mpisantatra na Asa manavanana 2 amin’ny Mpisavalàlana",
        "- Manana ny Asa Manavanana Fitantarana Tantara Kristiana"
      ],
    },
    
    {
      title: "Fitomboana ara-batana",
      icon: "bi-heart-pulse",
      items: [
        "CPR sy vonjy aina",
        "Fahaiza-manao amin’ny lasy",
        "Ekolojia sy orientation",
        "Fanaovana fanatanjahan-tena",


        "1. Misafidy ny iray amin’ireto manaraka ireto ary mirakitra ny fandrosoanao:	",
		      "- Nahazo ny asa manavanana tomady ara-batana.",
		      "- Nahazo ny mari-pankasitrahana Mpanao Spaoro.",  
		      " - Nahavita ny fizarana tomady ara-batana ao amin’ny mari-pankasitrahana volafotsy sy volamena",
          " - Misafidy fanazarana ara-batana rehefa nifanakalo hevitra tamin’ny Filoha Mpitarika mpiahy ary nahavita programa farafahakeliny 3 volana amin’ny programa fanatanjahan-tena",
          " - Mahavita programa fanatanjahan-tena nomen’ny dokotera mandritra ny telovolana",
  	    "2. Mahazo ireto asa manavanana tsirairay avy ireto:	",
          "- Aro loza amin’ny rano",
		      " - Aro loza amin’ny lasy",
          " - Fahaiza-manao momba ny lasy I",
          " - Fahaiza-manao momba ny lasy II",
          " - Fahalalana onon",
        "3. Mahazo farafahakeliny telo amin’ireto Asa manavanana ireto:	",
          " - Dia an-tongotra lavitra",
          " - Vonjy voina fototra",
          " - Fahaiza-manao momba ny lasy III",
          " - Fahaiza-manao momba ny lasy IV",
          " - Fihetsika mirindra & famindrana (drill)",
          " - Ekolojia ",
          " - Fandrehetana afo & fandrahoana an-dasy",
          " - Fanaovana vona",
          " - Fahaizana misakafo (Nutrition)",
          " - Lalan-kombana (Orientation)",
        " 4. Manana taratasy Fanamarinana Vonjy aina sy CPR (fameloman’aina) avy any amin’ny Vokovoko mena na ny mitovy amin’izany.	"

      ],
    },
    {
      title: "Fitomboana ara-panahy",
      icon: "bi-cross",
      items: [
        "Fandalinana Filazantsara",
        "Diary fibanjinana",
        "Fotopinoana 28",
        "Fanabeazana sy fanompoana",
        " 1. Misafidy ny iray amin’ireto manaraka ireto ary manao ny safidy roa ao amin’ny Sehatry ny Fizarana:",
          " - Mamaky na mihaino ny Filazantsara efatra sy ny boky Ilay Fitiavana Mandresy nosoratan’i Ellen White",
          " - Mamaky na mihaino ny drafitra Fihaonana, Fizarana voalohany: Kristy no Làlana.",
        " 2. Mirakitra an-tsoratra, diary fibanjinana farafahakeliny iray volana, mamintina izay nianaranao nandritra ny fotoana fibanjinana ary manoritsoritra ny fomba nitomboanao tamin’ny finoanao.	",
        " 3. Mamaky na mihaino ny boky Ny Dia ho eo amin’i Kristy nosoratan’i Ellen White ary manao safidy roa ao amin’ny Sehatry ny Fizarana.",
        " 4. Manoratra paragrafy iray ho fisaintsainana isaky ny tsirairay amin’ny fotopinoana 28. ",
        " 5. Misafidy ny iray amin’ireto manaraka ireto: ",
          " - Mampianatra Baiboly na mampianatra kilasin’ny batisa mandritra ny telovolana",
          " - Mampianatra ny dimy amin’ireto foto-pinoana ireto amin’ny fandaharam-potoana nankatoavin’ny fiangonana",
              " - Famoronana",
              " - Fanandraman’ny famonjena",
              " - Mitombo ao amin’i Kristy",
              " - Ny sisa sy ny iraka nampanaovina azy",
              " - Batisa",
              " - Fanandraman’ny famonjena",
              " - Batisa",
              " - Fanomezam-pahasoavana sy ny asa fanompoana",
              " - Ny Sabata",
              " - Asa fanompoan’i Kristy ao amin’ny  fitoerana masina any an-danitra",
              " - Ny fiavian’i Kristy fanindroany",
              " - Ny fahafatesana sy ny fitsanganana amin’ny maty",
        " 6. Misafidy ny iray amin’ireto manaraka ireto ary manao ny safidy roa ao amin’ny Sehatry ny Fizarana:",
          " - Mahazo ny Asa manavanana Fitoerana Masina ",
          " - Manatrika seminera nankatoavin’ny Federasiona mahakasika ny Fitoerana masina.",  
        " -7. Misafidy ny iray amin’ireto manaraka ireto ary manao ny safidy roa ao amin’ny Sehatry ny Fizarana:",  
          " - Manana na mahazo ny asa manavanana Lovan’ireo mpamaky lay Advantista",  
          " - Nijery ny andian-tsary mihetsika “Tell the World",  
          " - Mijery ny andian-tsary mihetsika “Keepers of the Flame",  
          " - Mamaky na mihaino boky anankiray mahasika ny lovan’ny Fiangonana izay nankatoavin’ny Federasiona/ Mision",
      ],
    },
    {
      title: "Fiaraha-monina",
      icon: "bi-people",
      items: [
        " 1. Nahazo ny Asa Manavanana Asa fitoriana ataon’ny tena manokana. ",
        " 2. Nahazo ny telo amin’ireto asa manavanana manaraka ireto:",
          " - Fankasitrahana ny  fahasamihafana arakolontsaina",
          " - Mpampihavana",
          " - Tambajotra sosialy",
          " - Asa manavanana ADRA iray izay mbola tsy azo tany aloha",
          " - Asa manavanana iray momba  ny fikarakarana tokantrano  izay tsy mbola azo tany aloha",
        " 3. Mandray anjara amin’ny fandaminana hetsika ara-tsosialy telo miaraka amin’ny fiangonana eo an-toerana.",
        " 4. Misafidy ny iray amin’ireto manaraka ireto ary ampandraiso anjara raha azo atao ny kliobanao na vondrona tanora:",
          " - Mihaona amin’ny sampan’asan’ny governemanta eo an-toerana na fikambanana hafa ary mandray anjara amin’ny tetik’asa fanompoana ny  fiaraha-monina.",
          " - Miara-miasa amin’ny hetsika  fanatrarana ny fiaraha-monina ataon’ny ADRA eo an-toerana (na ny asa fanompoana mitovy   amin’izany) mandritra ny   telovolana farafahakeliny"
      ],
    },
    {
      title: "Takiana amin'ny investitiora",
      icon: "bi-patch-check",
      items: [
        "Fanamarinana ara-piangonana",
        "Vita ny fepetra rehetra",
        "Tsy mihoatra ny 3 taona",
      ],
    },
  ];

  const cards2 = [
    {
      title: "Fepetra Mialoha",
      icon: "bi-person-check",
      items: [
        "1. Vita batisa ary mambra ara-dalàna ao amin'ny Fiangonana Advantista mitandrina ny Andro fahafito.",
        "2. Manana taratasy fanamarinana avy any amin'ny komitin'ny fiangonana. ",
        "3. 16 Taona fara-fahakeliny amin'ny fotoana hanombohana ny fiofanana.",
        "4. Mpikambana mavitrika ao amin'ny STAFF/ na mpanohana ny Asa fanompoana ataon'ny Ambasadaoro na Tanora zoky",
        "5. Nahavita ny seminera 10 ora fiofanana fototra ary nandray anjara farafahakeliny herintaona.",
      ],
    },
    {
      title: "HIANAO SY ANDRIAMANITRA",
      icon: "bi-person-check",
      items: [
        "1. Manao ireto zavatra manaraka ireto",
            "a. Mahafantatra ireo fanomezam-pahasoavana amin'ny fanaovana fitsapana.",
            "b. Manoratra famintinana (teny 250- 1 pejy) na firaketana feo 5 mn rehefa avy nandinika ny Baiboly sy ny Fanahin'ny Faminaniana ny fomba hampiasana amim-pahombiazana eo amin'ny asa fanompoana ny tanora ireo fanomezam-pahasoavana anananao",
        "2. Mihaino na mamaky ny boky Dia ho eo amin'i Kristy ary manome famintinana 1 pejy na firaketam-peo 5 minitra mifantoka amin'ireo tombontsoa tamin'ny zavatra novakiana.",
        "3. Nahatanteraka ny tari-dalana Fihaonana andiany voalohany, na nahatanteraka famakiana ny Baiboly mandritra ny taona izay misy ny Filazantsara efatra.",
        "4. Namaky na mihaino ny boky Ilay Fitiavana Mandresy.",
        "5. Manao ireto zavatra manaraka ireto:",
            "a. Manao diary ny fibanjinana mandritra ny enim-bolana farafahakeliny, mamintina izay nianarana nandritra ny fotoana fanokanan-tena ary manoritsoritra ny fomba nitomboanao tamin'ny finoana.",
            "a. Manao diary ny fibanjinana mandritra ny enim-bolana farafahakeliny, mamintina izay nianarana nandritra ny fotoana fanokanan-tena ary manoritsoritra ny fomba nitomboanao tamin'ny finoana.",
            "c. Mamintina sy mitsikera ary manombana ao anatin'ny teny 500 na 2 pejy na firaketam-peo 10 minitra) Ny herinandro fiaraha-mivavaka (elektronika) amin'io taona io. (Facebook: GC Youth Ministries)",
        "6. Manomana famintinana ireo teboka manan-danja ao amin'ny foto-pinoana 28 ao anatin'ny teny 250 na firaketam-peo 5 minitra.",
      ],
    },
    {
      title: "HIANAO SY HIANAO",
      icon: "bi-person-check",
      items: [
        "1. Manao ireto manaraka ireto:",
            "a. Eo am-pandinihana ny Kolosiana 1:16, velabelaro ireo vina sy iraka eo amin'ny fiainanao.",
            "b. Mahafantatra ireo andraikitrao eo amin'ny fiainana, ny iray farafahakeliny  mifantoka amin'ny ara-panahy, ary manome tanjona telo na ny zava-kendrena amin'ny andraikitra tsirairay.",
        "2. Mampianatra ireto asa manavanana manaraka ireto:",
            " a. Tomady ara-batana",
            " b. Sakafo" , 
            " c. Fitarihana ankalamanjana",
            " d. Fitantanam-pananana",
            " e. Vonjy taitra(Avy amin'ny Vokovoko mena na ny mitovy amin'izany)" ,
            " f. Fampielezam-boky evanjelistra",
            " g. Hafa:",
        " 3. Mamaky na mihaino ny boky Education na Hafatra ho an'ny Tanora nosoratan'ny Ellen G. White",
        " 4. Maneho fahaiza-mitarika amin'ny fanaovana ny roa amin'ireto zavatra manaraka ireto:",
          " a. Mmamelabelatra na mitarika fanompoam-pivavahana amin'ny fomba tia karokaroka anankitelo ho an'ny ambasadaoro na ny tanora zoky ",
          " b. Mandray anjara amin'ny andraikitra fitarihana miaraka amin'ireo vondrona tanora eo amin'ny fiangonana eo an-toerana amin'ny hetsika  karakarain'ny Federasiona/Misiona. ",
          " c. Mitarika ireo Ambasadaoro hamita module iray mandra-pahazo sertifikà. ",
          " d. Mpikambana mavitrika ao amin'ny STAFFn'ny Ambasadaoro, tanora  zoky na Sekoly Sabata farafahakeliny herintaona ary manatrika farafahakely ny 75% n'ny fivorian'ny STAFF.",
          " e. Mpampiely boky Evanjelistra farafahakeliny nandritra ny 60 ora niaraka tamin'ny Departemantan'ny Fampielezam-boky ao amin'ny  Federasiona.",
        " 5. Mandray anjara amin'ny drafitra hahatomady ara-batana amin'ny fanatanterahana ny iray  amin'ireto manaraka ireto: toa ka efa manana ny mari-pankasitrahana volafotsy dia ataovy ny mari-pankasitrahana volamena.",
            " b. Programa fanatanjahan-tena eny amin'ny ambaratonga ambony.",
            " c. Programa ataon'ny tena manokana mifototra amin'ny boky iray nosafidianao na manatanteraka programa iray rehefa nila hevitra  tamin'ny talen'ny departemantan'ny tanora ao amin'ny Federasiona/Misiona na ny Pasitora/ Mpitarika tanora voaofana notendreny.",
      ],
    },
    {
      title: "HIANAO SY NY TANORA",
      icon: "bi-person-check",
      items: [
        "1. Mifanakalo hevitra ao amin'ny tarika madinika (30 minitra isaky ny lohahevitra) ary manoratra ny fahatsapanao amin'ny taratasy ao anatin'ny teny 1000 -(3-4 pejy) na horonam-peo mandritra ny 20 minitra amin'ireto lohahevitra 10 manaraka ireto:",
            " a. Fifandraisan'ny Governmenta amin'ny fiangonana ",
            " b. Mozika sy Fiankohofana",
            " c. Firaisana ara-nofo sy Fifankatiavana",
            " d. Fikarakarana ny tontolo iainana",
            " e. Ny fiarahana sy ny fanambadiana",
            " f. Ny fanompoana sy ny asa an-tsitram-po",
            " g. Ny fitondran-tena ( etika)",
            " h. Fahasalamana sy fahalalana onony",
            " i. Fahamarinana ara-tsosialy",
            " j. Fahafahana ara-pivavahana",
            " k. Fitoriana ny filazantsara amin'ny tanora",
            " l. Herisetra sy fiadanana",
            " m. Fitafy Kristiana",
            " n. Ny fosafosa sy vosibositra ",
            " o. SIDA/Homamiadana",
            " p. Ny fialam-boly sy filalaovana",
            " q. Ny fironana ho amin'ny firaisana (LGBT)",
            " r. Ny tsy fananan'asa sy ny famoronana orin'asa",
            " s. Ny fitsaratsarana sy ny fanavakavahana",
            " t. Ny fomba fitondran-tena",
            " u. Ireo Zon'olombelona",
            " v. Ny fandanilaniam-bola",
            " w. Zavatra hafa: .....................................................................................",
      ],
    },
    {
      title: "HIANAO SY NY TANORA",
      icon: "bi-person-check",
      items: [
        "1. Mifanakalo hevitra ao amin'ny tarika madinika (30 minitra isaky ny lohahevitra) ary manoratra ny fahatsapanao amin'ny taratasy ao anatin'ny teny 1000 -(3-4 pejy) na horonam-peo mandritra ny 20 minitra amin'ireto lohahevitra 10 manaraka ireto:",
            " a. Fifandraisan'ny Governmenta amin'ny fiangonana ",
            " b. Mozika sy Fiankohofana",
            " c. Firaisana ara-nofo sy Fifankatiavana",
            " d. Fikarakarana ny tontolo iainana",
            " e. Ny fiarahana sy ny fanambadiana",
            " f. Ny fanompoana sy ny asa an-tsitram-po",
            " g. Ny fitondran-tena ( etika)",
            " h. Fahasalamana sy fahalalana onony",
            " i. Fahamarinana ara-tsosialy",
            " j. Fahafahana ara-pivavahana",
            " k. Fitoriana ny filazantsara amin'ny tanora",
            " l. Herisetra sy fiadanana",
            " m. Fitafy Kristiana",
            " n. Ny fosafosa sy vosibositra ",
            " o. SIDA/Homamiadana",
            " p. Ny fialam-boly sy filalaovana",
            " q. Ny fironana ho amin'ny firaisana (LGBT)",
            " r. Ny tsy fananan'asa sy ny famoronana orin'asa",
            " s. Ny fitsaratsarana sy ny fanavakavahana",
            " t. Ny fomba fitondran-tena",
            " u. Ireo Zon'olombelona",
            " v. Ny fandanilaniam-bola",
            " w. Zavatra hafa: .....................................................................................",
        " 2. Manao fikarohana 2 pejy (teny 500 raha kely indrindra) na manao raki-peo maharitra 10mn mahakasika ny fanadihadiana ny tamba-toetra (temperament) ary mahatanteraka ny tanisan'ny (inventaire) tamba-toetra mifanaraka aminao. (Module 4,Ambassadeurs).",
        " 3. Manatrika fiofanana ataon'ny Union na Federasiona mahakasika ny drafitra ho amin'ny fandriam-pahalemana sy fiantohana ",
      ],
    },
  ];
  return (
    <div>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #0f172a;
          color: #f8fafc;
        }
        .navbar {
          background-color: #1e293b;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }
        .navbar a {
          color: #f8fafc;
          text-decoration: none;
          margin-left: 1.5rem;
          font-weight: 500;
        }
        .navbar a:hover {
          color: #38bdf8;
        }
        .logo {
          font-weight: bold;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
        }
        .logo i {
          margin-right: 0.5rem;
          color: #38bdf8;
        }
        .hero {
          text-align: center;
          padding: 4rem 2rem;
        }
        .hero h1 {
          font-size: 2.5rem;
          color: #38bdf8;
        }
        .hero p {
          margin-top: 1rem;
          color: #cbd5e1;
        }
        .btn-main {
          background-color: #0ea5e9;
          color: white;
          padding: 0.75rem 2rem;
          margin-top: 2rem;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
        }
        .section {
          padding: 2rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .card {
          background-color: #1e293b;
          border-radius: 10px;
          padding: 1.5rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }
        .card:hover {
          transform: scale(1.02);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color:white;
        }
        .card-header i {
          color: #38bdf8;
          margin-right: 0.5rem;
        }
        .card ul {
          list-style: none;
          padding-left: 1rem;
        }
        .card ul li::before {
          content: "\\2714";
          margin-right: 0.5rem;
          color: #22c55e;
        }
        li {
          color: white;
        }
      `}</style>

      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          {/* <i className="bi bi-list-check"></i> FEPERA CG */}
        </div>
        <div>
          <a href="#">Accueil</a>
          <a href="/login">Connexion</a>
          <a href="/login">S'inscrire</a>
        </div>
      </div>

      <div className="hero">
        <h1>Fepetra takiana ho an’ny Investitiora CG</h1>
        <p>Jereo eto ambany ireo fizarana rehetra ilaina alohan’ny investiture</p>
        <button className="btn-main">Commencer</button>
      </div>

      <div className="container">
        <div className="section">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <span>
                  <i className={`bi ${card.icon}`}></i> {card.title}
                </span>
                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={() => toggleCard(index)}
                >
                  {expandedCard === index ? (
                    <><i className="bi bi-eye-slash"></i> Moins</>
                  ) : (
                    <><i className="bi bi-eye"></i> Plus</>
                  )}
                </button>
              </div>
              {expandedCard === index && (
                <ul>
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
