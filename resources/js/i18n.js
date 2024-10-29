import { createI18n } from 'vue-i18n';

const messages = {
    sr: {
        home: 'Početna',
        about: 'O doktoru',
        work: 'Radno iskustvo',
        interest: 'Interesovanja',
        statistic: 'Statistika',
        cont: 'Kontakt',
        specialty: 'Specijalista ortopedije sa traumatologijom',
        about_header: 'O doktoru',
        about_text: 'Dr Gordan Gavrilović je specijalista ortopedije sa traumatologijom sa dugogodišnjim radnim iskustvom. Po završetku Medicinskog fakulteta u Beogradu upisuje specijalizaciju iz ortopedske hirurgije i traumatologije i istu završava 1991. Nakon nostrifikacije diplome u Grčkoj, radio je u bolnici Ygeia do 1999. godine. Po povratku u Beograd uveo je transplantaciju hrskavice sistemom OATS 2000.godine. Učestvovao je u edukaciji kolega iz Švajcarske za istu OATS tehniku. Organizovao je i unapredio artroskopsku hirurgiju kao instruktor na kursevima iz oblasti hirurgije ramena, kolena, lakta i skočnog zgloba. Glavni je istraživač u studiji ”Elevacija učinka bifaznog implantata Agili-C na obnavljanju hrskavice i osteohondralne defekte” pod pokroviteljstvom kompanije CartiHeal na IOHB ”Banjica” u Beogradu.',
        education_header: 'Obrazovanje',
        education_text1: 'Medicinski fakultet Univerziteta u Beogradu - 1983.',
        education_text2: 'Medicinski fakultet Univerziteta u Beogradu (Specijalizacija iz ortopedske hirurgije i traumatologije) - 1991.',
        work_ex_header: 'Radno iskustvo',
        work_ex_text: 'Asistent na Institutu za anatomiju i ortopediju - od 1991. do 1999.',
        work_ex_text2: 'Specijalista ortopedske hirurgije i traumatologije na Institutu za ortopedsko-hirurške bolesti „Banjica“ u Službi za ortopediju - od 1991. do 1999.',
        work_ex_text3: 'Bolnica Ygeia (Grčka) - od 1999. do 1999.',
        work_ex_text4: 'Odeljenje za sportsku traumatologiju Instituta za ortopedsko-hirurške bolesti „Banjica“ u Beogradu - od 1999. do 2015.',
        work_ex_text5: 'Atlas opšta bolnica - od 2015. do 2024.',
        work_ex_text6: 'Avala opšta bolnica - od 2024.',
        expertes_header: 'Uže oblasti interesovanja',
        expertes_text: 'Transplantacija hrskavice sistemom OATS -',
        expertes_text2: 'Matične ćelije -',
        expertes_text3: 'Bioregenerativna medicina u traumatologiji i ortopediji -',
        expertes_text4: 'Artroskopska hirurgija iz oblasti hirurgije ramena, kolena, kuka, lakta i skočnog zgloba -',
        expertes_text5: 'Ligamentoplastika -',
        expertes_text6: 'Ugradnja veštačkih zglobova (proteza kuka, kolena, ramena) -',
        expertes_text7: 'Reviziona hirurgija -',
        expertes_text8: 'Operacije kolena -',
        expertes_text9: 'Orthokin terapija, ACP PRP terapija -',
        lang_header: 'Jezici',
        lang_text: 'Engleski -',
        lang_text2: 'Grčki -',
        statistic_op: 'Operacija',
        statistic_pati: 'Zadovoljnih pacijenata',
        statistic_ex: 'Godine iskustva',
        contact: 'Kontakt',
        phone: 'Telefon',
        socials: 'Društvene mreže',
        send_message: 'Pošaljite poruku',
        name_sur: 'Ime i prezime',
        header: 'Naslov',
        message: 'Poruka',
        send: 'Pošalji',
        cell: 'Mobilni',
        success: 'Uspešno poslat mail',
        error: 'Greška prilikom slanja mail-a',
        contacnt_text: 'Opšta bolnica Avala',
        name_required: 'Polje "Ime i prezime" nije popunjeno',
        email_required: 'Polje "Email" nije popunjeno',
        email_invalid: 'Format nije validan',
        subject_required: 'Polje "Naslov" nije popunjeno',
        message_required: 'Polje "Poruka" nije popunjeno'
    },
    en: {
        home: 'Home',
        about: 'About',
        work: 'Work Experience',
        interest: 'Interests',
        statistic: 'Statistics',
        cont: 'Contact',
        specialty: 'Orthopedics Specialist with Traumatology',
        about_header: 'About the Doctor',
        about_text: 'Dr. Gordan Gavrilović is an orthopedics specialist with traumatology, with many years of professional experience. After graduating from the Faculty of Medicine in Belgrade, he enrolled in a specialization in orthopedic surgery and traumatology, which he completed in 1991. After validating his degree in Greece, he worked at the Ygeia hospital until 1999. Upon returning to Belgrade, he introduced cartilage transplantation using the OATS system in 2000. He participated in the education of colleagues from Switzerland for the same OATS technique. He organized and improved arthroscopic surgery as an instructor in courses on shoulder, knee, elbow, and ankle surgery. He is the lead researcher in the study "Effectiveness of the Agili-C biphasic implant in cartilage regeneration and osteochondral defects" sponsored by CartiHeal at the IOHB "Banjica" in Belgrade.',
        education_header: 'Education',
        education_text1: 'Faculty of Medicine, University of Belgrade - 1983',
        education_text2: 'Faculty of Medicine, University of Belgrade (Specialization in orthopedic surgery and traumatology) - 1991.',
        work_ex_header: 'Work Experience',
        work_ex_text: 'Assistant at the Institute of Anatomy and Orthopedics - from 1991 to 1999.',
        work_ex_text2: 'Specialist in orthopedic surgery and traumatology at the Institute for Orthopedic Surgery and Diseases "Banjica" in the Orthopedics Service - from 1991 to 1999.',
        work_ex_text3: 'Ygeia Hospital (Greece) - from 1999 to 1999.',
        work_ex_text4: 'Department of Sports Traumatology at the Institute for Orthopedic Surgery and Diseases "Banjica" in Belgrade - from 1999 to 2015.',
        work_ex_text5: 'Atlas General Hospital - from 2015 to 2024.',
        work_ex_text6: 'Avala General Hospital - from 2024.',
        expertes_header: 'Areas of Interest',
        expertes_text: 'Cartilage transplantation using the OATS system -',
        expertes_text2: 'Stem cells -',
        expertes_text3: 'Bioregenerative medicine in traumatology and orthopedics -',
        expertes_text4: 'Arthroscopic surgery in the field of shoulder, knee, hip, elbow, and ankle surgery -',
        expertes_text5: 'Ligamentoplasty -',
        expertes_text6: 'Implantation of artificial joints (hip, knee, shoulder prosthesis) -',
        expertes_text7: 'Revision surgery -',
        expertes_text8: 'Knee surgeries -',
        expertes_text9: 'Orthokin therapy, ACP PRP therapy -',
        lang_header: 'Languages',
        lang_text: 'English -',
        lang_text2: 'Greek -',
        statistic_op: 'Surgeries',
        statistic_pati: 'Satisfied patients',
        statistic_ex: 'Years of experience',
        contact: 'Contact',
        phone: 'Phone',
        socials: 'Social media',
        send_message: 'Send message',
        name_sur: 'Full name',
        header: 'Subject',
        message: 'Message',
        send: 'Send',
        cell: 'Cell phone',
        success: 'Mail is successfully sent',
        error: 'Error while sending mail',
        contacnt_text: 'General hospital Avala',
        name_required: 'Field "Full name" must be filled out',
        email_required: 'Field "Email" must be filled out',
        email_invalid: 'Format is not valid',
        subject_required: 'Field "Subject" must be filled out',
        message_required: 'Field "Message" must be filled out'
    }
};

const i18n = createI18n({
    locale: 'sr',
    fallbackLocale: 'en',
    messages,
});

export default i18n;
