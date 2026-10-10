export type Locale = "pl" | "en";

export const siteCopy = {
  pl: {
    nav: { features: "Możliwości", how: "Jak to działa", audience: "Dla kogo", contact: "Porozmawiajmy", home: "reBooked — wróć na początek", menuOpen: "Otwórz menu", menuClose: "Zamknij menu", navigation: "Nawigacja główna" },
    hero: { title: "Spotkania", titleAccent: "bez komplikacji.", lead: "reBooked ułatwia umawianie wizyt, sesji i treningów. Klient wybiera dogodny termin, a Ty masz każdą prośbę o spotkanie w jednym miejscu.", cta: "Porozmawiajmy o reBooked", learn: "Zobacz, jak działa" },
    band: { label: "Główna idea reBooked", first: "Mniej ustalania przez wiadomości.", strong: "Więcej czasu na właściwe spotkania." },
    steps: { kicker: "JAK TO DZIAŁA", headingOne: "Od wolnego terminu", headingTwo: "do gotowego spotkania", description: "Bez zbędnych telefonów i długich ustaleń. reBooked prowadzi klienta przez prostą rezerwację, a Tobie zostawia ostatnie słowo.", footnote: "W każdej chwili klient może też anulować umówione spotkanie.", items: [
      { number: "01", title: "Odkrywa termin", detail: "Widoczne są najbliższe dostępne godziny i rodzaje spotkań." },
      { number: "02", title: "Wysyła rezerwację", detail: "Klient loguje się lub zakłada konto i wybiera wizytę." },
      { number: "03", title: "Dodaje szczegóły", detail: "Może dopisać pytanie lub informację ważną przed spotkaniem." },
      { number: "04", title: "Ma wszystko pod ręką", detail: "Sprawdza decyzję pracownika i może anulować spotkanie." },
    ] },
    features: { kicker: "W PRAKTYCE", headingOne: "Małe rzeczy,", headingTwo: "które robią", headingAccent: "dużą", headingThree: "różnicę.", description: "reBooked porządkuje cały moment umawiania wizyty — od pierwszego wyboru terminu po potwierdzenie przez pracownika.", link: "Poznaj możliwości", items: [
      { number: "01", title: "Prosty wybór terminu", detail: "Klient od razu widzi, kiedy i na jaką usługę może się umówić." },
      { number: "02", title: "Decyzja po Twojej stronie", detail: "Pracownik akceptuje lub odrzuca prośbę. Przy odmowie może podać powód." },
      { number: "03", title: "Miejsce na kontekst", detail: "Uwagi przy rezerwacji pomagają przygotować się do spotkania." },
      { number: "04", title: "Elastyczne anulowanie", detail: "Klient może anulować umówione spotkanie z poziomu aplikacji." },
    ] },
    audience: { kicker: "ZASTOSOWANIA", headingOne: "Dla każdego, kto", headingAccent: "umawia spotkania.", description: "reBooked nie jest przypisany do jednej branży. Jeśli klienci wybierają u Ciebie termin, można dopasować go do Twojej oferty.", items: [
      { title: "Spotkania indywidualne", detail: "Rozmowy, konsultacje i wizyty umawiane na konkretną godzinę.", className: "meetings" },
      { title: "Sesje i zajęcia", detail: "Klient wybiera rodzaj spotkania i termin pasujący do jego planu.", className: "sessions" },
      { title: "Usługi na rezerwację", detail: "Własne nazwy usług i prosty zapis na dostępne terminy.", className: "services" },
    ] },
    models: { kicker: "JEDEN POMYSŁ, RÓŻNE POTRZEBY", headingOne: "reBooked dopasowuje się", headingTwo: "do modelu Twojej pracy", single: { label: "WARIANT 01 / JEDNA FIRMA", titleOne: "Jedna marka.", titleTwo: "Własne zasady.", description: "Klient widzi najbliższe terminy i usługi konkretnej firmy. Wygląd oraz wybrane funkcje można dostosować do jej potrzeb.", note: "Wersja bazowa działa bez płatności online.", flow: ["Klient", "Twoja oferta", "Termin", "Decyzja"] }, multi: { label: "WARIANT 02 / WIELE MIEJSC", titleOne: "Wiele miejsc.", titleTwo: "Jedna droga.", description: "Możliwy kierunek rozwoju: klient wybiera miejsce, rodzaj spotkania i dogodny termin w jednym doświadczeniu.", note: "Płatność przed wizytą jako opcja przyszłego wdrożenia.", flow: ["Klient", "Wybór miejsca", "Usługa", "Rezerwacja"] } },
    custom: { kicker: "STWORZONY DLA TWOJEJ MARKI", headingOne: "To Twój biznes.", headingAccent: "Nie szablon.", description: "reBooked jest pomysłem na rozwiązanie, które można ubrać w charakter Twojej firmy i rozbudować o funkcje, których naprawdę potrzebujesz.", tags: ["Wygląd marki", "Zakres funkcji", "Sposób rezerwacji"], cardTitle: "Twoja przestrzeń", cardService: "Twoja usługa", cardAction: "Wybierz termin →" },
    cta: { kicker: "POROZMAWIAJMY", headingOne: "A gdyby umawianie wizyt", headingTwo: "w Twojej firmie było", headingAccent: "prostsze?", description: "Opowiedz mi, jak pracujesz z klientami. Zobaczymy, jak reBooked może pasować do Twojego sposobu działania.", button: "Porozmawiaj ze mną o wdrożeniu" },
    footer: { tagline: "Prościej się spotkać.", back: "Wróć na górę ↑" },
    preview: { label: "Interaktywny, przykładowy podgląd reBooked", top: "Podgląd aplikacji", tabs: "Widok aplikacji", clientTab: "Dla klienta", businessTab: "Dla firmy", clientEyebrow: "TWOJA NASTĘPNA WIZYTA", clientHeading: "Znajdź swój moment.", pickService: "Wybierz spotkanie", serviceLabel: "Rodzaj spotkania", services: ["Konsultacja", "Sesja", "Trening"], week: "Przykładowy tydzień", days: ["Pon", "Wt", "Śr", "Czw", "Pt"], available: "Dostępne godziny", chosen: "Wybrano:", next: "Dalej", businessEyebrow: "PANEL FIRMY", businessHeading: "Spokojnie, masz plan.", sampleDay: "PRZYKŁADOWY DZIEŃ", goodDay: "Dobry dzień na spotkania", newRequest: "Nowa prośba o spotkanie", guest: "Julia Wiśniewska", guestService: "Konsultacja wstępna", guestNote: "„Czy mogę przyjść z psem?”", reject: "Odrzuć", accept: "Akceptuj", accepted: "Prośba zaakceptowana", rejected: "Prośba odrzucona", undo: "Cofnij", disclaimer: "Przykładowy widok. Decyzje w podglądzie nie zapisują rezerwacji." },
  },
  en: {
    nav: { features: "Features", how: "How it works", audience: "Who it's for", contact: "Let's talk", home: "reBooked — back to top", menuOpen: "Open menu", menuClose: "Close menu", navigation: "Main navigation" },
    hero: { title: "Bookings", titleAccent: "made simple.", lead: "reBooked makes it easy to schedule appointments, sessions and training. Clients pick a convenient time, while you keep every request in one place.", cta: "Let's talk about reBooked", learn: "See how it works" },
    band: { label: "The reBooked idea", first: "Less scheduling by message.", strong: "More time for the work that matters." },
    steps: { kicker: "HOW IT WORKS", headingOne: "From an open slot", headingTwo: "to a booked meeting", description: "No endless calls or back-and-forth. reBooked guides clients through a simple request and leaves the final decision to you.", footnote: "Clients can also cancel an appointment whenever they need to.", items: [
      { number: "01", title: "Find a time", detail: "Upcoming available slots and meeting types are easy to see." },
      { number: "02", title: "Request a booking", detail: "Clients sign in or create an account, then choose a visit." },
      { number: "03", title: "Add details", detail: "They can include a question or anything you should know beforehand." },
      { number: "04", title: "Stay in control", detail: "They see your decision and can cancel their appointment." },
    ] },
    features: { kicker: "IN PRACTICE", headingOne: "Small details,", headingTwo: "that make a", headingAccent: "big", headingThree: "difference.", description: "reBooked brings the booking journey together, from choosing a time to a team member's decision.", link: "Explore the possibilities", items: [
      { number: "01", title: "Easy time selection", detail: "Clients can immediately see when and what they can book." },
      { number: "02", title: "You make the call", detail: "A team member can accept or decline a request and give a reason." },
      { number: "03", title: "Room for context", detail: "Booking notes help you prepare before the meeting." },
      { number: "04", title: "Flexible cancellation", detail: "Clients can cancel an appointment in the app." },
    ] },
    audience: { kicker: "USE CASES", headingOne: "For anyone who", headingAccent: "books time with clients.", description: "reBooked isn't tied to one industry. If clients choose a time with you, it can be shaped around your services.", items: [
      { title: "One-to-one meetings", detail: "Calls, consultations and visits booked for a specific time.", className: "meetings" },
      { title: "Sessions and classes", detail: "Clients choose a meeting type and a time that suits them.", className: "sessions" },
      { title: "Bookable services", detail: "Your own service names and a clear path to available slots.", className: "services" },
    ] },
    models: { kicker: "ONE IDEA, MANY NEEDS", headingOne: "reBooked adapts", headingTwo: "to the way you work", single: { label: "OPTION 01 / ONE BUSINESS", titleOne: "One brand.", titleTwo: "Your rules.", description: "Clients see the next available times and services for your business. The look and selected features can be tailored to your needs.", note: "The core version works without online payments.", flow: ["Client", "Your services", "Time slot", "Decision"] }, multi: { label: "OPTION 02 / MANY PLACES", titleOne: "Many places.", titleTwo: "One experience.", description: "A possible next step: clients choose a place, a service and a time in a single experience.", note: "Payment before a visit can be added in a future rollout.", flow: ["Client", "Choose a place", "Service", "Booking"] } },
    custom: { kicker: "BUILT AROUND YOUR BRAND", headingOne: "Your business.", headingAccent: "Never a template.", description: "reBooked can take on your brand's character and grow with the features you actually need.", tags: ["Brand look", "Feature set", "Booking flow"], cardTitle: "Your space", cardService: "Your service", cardAction: "Choose a time →" },
    cta: { kicker: "LET'S TALK", headingOne: "What if scheduling", headingTwo: "in your business felt", headingAccent: "simpler?", description: "Tell me how you work with clients. We'll see how reBooked could fit the way you do things.", button: "Let's talk about bringing reBooked to you" },
    footer: { tagline: "A simpler way to meet.", back: "Back to top ↑" },
    preview: { label: "Interactive sample of the reBooked app", top: "App preview", tabs: "App view", clientTab: "For clients", businessTab: "For businesses", clientEyebrow: "YOUR NEXT APPOINTMENT", clientHeading: "Find your moment.", pickService: "Choose a service", serviceLabel: "Service type", services: ["Consultation", "Session", "Training"], week: "Sample week", days: ["Mon", "Tue", "Wed", "Thu", "Fri"], available: "Available times", chosen: "Selected:", next: "Next", businessEyebrow: "BUSINESS DASHBOARD", businessHeading: "Your day, under control.", sampleDay: "SAMPLE DAY", goodDay: "A good day for meetings", newRequest: "New booking request", guest: "Julia Wilson", guestService: "Intro consultation", guestNote: "“Can I bring my dog?”", reject: "Decline", accept: "Accept", accepted: "Request accepted", rejected: "Request declined", undo: "Undo", disclaimer: "Sample view. Actions here do not create real bookings." },
  },
} as const;

export function getCopy(locale: Locale) {
  return siteCopy[locale];
}
