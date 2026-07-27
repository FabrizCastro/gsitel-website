import factVentas from "@/assets/projects/n8n/fact-ventas-automatization.jpeg";
import factReport from "@/assets/projects/n8n/factreportresponsegmail.jpeg";
import ascensoresLogin from "@/assets/projects/ascensores/loggin.png";
import ascensoresHome from "@/assets/projects/ascensores/home.jpeg";
import ascensoresChart from "@/assets/projects/ascensores/chart.jpeg";
import ascensoresNuevo1 from "@/assets/projects/ascensores/nuevo-1.jpeg";
import ascensoresNuevo2 from "@/assets/projects/ascensores/nuevo-2.jpeg";
import ascensoresNuevo3 from "@/assets/projects/ascensores/nuevo-3.jpeg";
import ascensoresEliminar from "@/assets/projects/ascensores/eliminar.jpeg";
import ascensoresConstructoras from "@/assets/projects/ascensores/constructoras.jpeg";
import ascensoresDistritos from "@/assets/projects/ascensores/distritos.jpeg";
import ascensoresSwagger from "@/assets/projects/ascensores/swagger.jpeg";
import ongHero from "@/assets/projects/paginas/hero_vsf.png";
import ongAbout from "@/assets/projects/paginas/about_vsf.png";
import ongResults from "@/assets/projects/paginas/results_vsf.png";
import ongTeam from "@/assets/projects/paginas/team_vsf.png";
import ongNews from "@/assets/projects/paginas/news_vsf.png";
import ongContact from "@/assets/projects/paginas/contact_vsf.png";
import cuadraiOverview from "@/assets/projects/pichangapp/nuevo1c.png";
import cuadraiReservation from "@/assets/projects/pichangapp/1d.jpeg";
import cuadraiAdmin from "@/assets/projects/pichangapp/b.jpeg";
import cuadraiSchedule from "@/assets/projects/pichangapp/c.jpeg";
import cuadraiBookings from "@/assets/projects/pichangapp/e.jpeg";
import cuadraiMobile from "@/assets/projects/pichangapp/f.jpeg";
import type { ProjectDetailImage } from "@/data/projects/types";

const DETAIL_IMAGES: Record<string, ProjectDetailImage[]> = {
  sunat: [
    { src: factVentas, alt: "Automatización de ventas SUNAT" },
    { src: factReport, alt: "Reporte automatizado por correo" },
  ],
  ascensores: [
    { src: ascensoresLogin, alt: "Ascensores Tools login" },
    { src: ascensoresHome, alt: "Ascensores Tools home" },
    { src: ascensoresChart, alt: "Ascensores Tools charts" },
    { src: ascensoresNuevo1, alt: "Ascensores Tools nuevo 1" },
    { src: ascensoresNuevo2, alt: "Ascensores Tools nuevo 2" },
    { src: ascensoresNuevo3, alt: "Ascensores Tools nuevo 3" },
    { src: ascensoresEliminar, alt: "Ascensores Tools eliminar" },
    { src: ascensoresConstructoras, alt: "Ascensores Tools constructoras" },
    { src: ascensoresDistritos, alt: "Ascensores Tools distritos" },
    { src: ascensoresSwagger, alt: "Ascensores Tools swagger" },
  ],
  ong: [
    { src: ongHero, alt: "ONG becas deportivas hero" },
    { src: ongAbout, alt: "ONG becas deportivas acerca" },
    { src: ongResults, alt: "ONG becas deportivas resultados" },
    { src: ongTeam, alt: "ONG becas deportivas equipo" },
    { src: ongNews, alt: "ONG becas deportivas noticias" },
    { src: ongContact, alt: "ONG becas deportivas contacto" },
  ],
  pichangapp: [
    { src: cuadraiOverview, alt: "CUADRAI vista general" },
    { src: cuadraiReservation, alt: "CUADRAI reserva de canchas" },
    { src: cuadraiAdmin, alt: "CUADRAI panel de administración" },
    { src: cuadraiSchedule, alt: "CUADRAI gestión de horarios" },
    { src: cuadraiBookings, alt: "CUADRAI detalle de reservas" },
    { src: cuadraiMobile, alt: "CUADRAI vista móvil" },
  ],
};

export async function loadProjectDetailImages(
  key: string,
): Promise<ProjectDetailImage[]> {
  return getProjectDetailImages(key);
}

export function getProjectDetailImages(key?: string): ProjectDetailImage[] {
  return key ? DETAIL_IMAGES[key] ?? [] : [];
}
