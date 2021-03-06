import { toast } from "react-toastify";
toast.configure();

export const initialState = {
  kosarica: [],
  korisnik: null,
};

const notify = (prop) => {
  toast(prop);
};
// Selector
export const getKosaricaSuma = (kosarica) =>
  //reduce prolazi kroz sve artikle u kosarici i dodaje cijenu svakog u ukupan iznos, početni iznos 0
  kosarica?.reduce((iznos, artikl) => artikl.cijena + iznos, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "DODAJ_U_KOSARICU":
      let naziv = action.item.naslov;
      let skraceniNaziv =
        naziv.length > 20
          ? naziv
          : naziv.substring(0, naziv.length - 3) + "...";
      notify(`Dodali ste ${skraceniNaziv} u košaricu!`);
      return {
        ...state,
        kosarica: [...state.kosarica, action.item],
      };
    case "OBRISI_IZ_KOSARICE":
      const index = state.kosarica.findIndex(
        (kosaricaArtikl) => kosaricaArtikl.id === action.id
      );
      let novaKosarica = [...state.kosarica];
      if (index >= 0) {
        novaKosarica.splice(index, 1);
      } else {
        console.warn(
          `Nije moguće maknuti artikl (id: ${action.id}) jer nije u košarici!`
        );
      }

      return { ...state, kosarica: novaKosarica };

    case "POSTAVI_KORISNIKA":
      return { ...state, korisnik: action.korisnik };
    default:
      return state;
  }
};

export default reducer;
