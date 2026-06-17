import type { ProjectDetailImage } from "@/data/projects/types";

export async function loadProjectDetailImages(
  key: string,
): Promise<ProjectDetailImage[]> {
  switch (key) {
    case "sunat": {
      const [factVentas, factReport] = await Promise.all([
        import("@/assets/projects/n8n/fact-ventas-automatization.jpeg"),
        import("@/assets/projects/n8n/factreportresponsegmail.jpeg"),
      ]);
      return [
        {
          src: factVentas.default,
          alt: "Automatización de ventas SUNAT",
        },
        {
          src: factReport.default,
          alt: "Reporte automatizado por correo",
        },
      ];
    }
    case "ascensores": {
      const images = await Promise.all([
        import("@/assets/projects/ascensores/loggin.png"),
        import("@/assets/projects/ascensores/home.jpeg"),
        import("@/assets/projects/ascensores/chart.jpeg"),
        import("@/assets/projects/ascensores/nuevo-1.jpeg"),
        import("@/assets/projects/ascensores/nuevo-2.jpeg"),
        import("@/assets/projects/ascensores/nuevo-3.jpeg"),
        import("@/assets/projects/ascensores/eliminar.jpeg"),
        import("@/assets/projects/ascensores/constructoras.jpeg"),
        import("@/assets/projects/ascensores/distritos.jpeg"),
        import("@/assets/projects/ascensores/swagger.jpeg"),
      ]);
      const alts = [
        "Ascensores Tools login",
        "Ascensores Tools home",
        "Ascensores Tools charts",
        "Ascensores Tools nuevo 1",
        "Ascensores Tools nuevo 2",
        "Ascensores Tools nuevo 3",
        "Ascensores Tools eliminar",
        "Ascensores Tools constructoras",
        "Ascensores Tools distritos",
        "Ascensores Tools swagger",
      ];
      return images.map((image, index) => ({
        src: image.default,
        alt: alts[index] ?? `Ascensores Tools ${index + 1}`,
      }));
    }
    case "ong": {
      const images = await Promise.all([
        import("@/assets/projects/paginas/hero_vsf.png"),
        import("@/assets/projects/paginas/about_vsf.png"),
        import("@/assets/projects/paginas/results_vsf.png"),
        import("@/assets/projects/paginas/team_vsf.png"),
        import("@/assets/projects/paginas/news_vsf.png"),
        import("@/assets/projects/paginas/contact_vsf.png"),
      ]);
      const alts = [
        "ONG becas deportivas hero",
        "ONG becas deportivas acerca",
        "ONG becas deportivas resultados",
        "ONG becas deportivas equipo",
        "ONG becas deportivas noticias",
        "ONG becas deportivas contacto",
      ];
      return images.map((image, index) => ({
        src: image.default,
        alt: alts[index] ?? `ONG becas deportivas ${index + 1}`,
      }));
    }
    case "pichangapp": {
      const images = await Promise.all([
        import("@/assets/projects/pichangapp/nuevo1c.png"),
        import("@/assets/projects/pichangapp/1d.jpeg"),
        import("@/assets/projects/pichangapp/b.jpeg"),
        import("@/assets/projects/pichangapp/c.jpeg"),
        import("@/assets/projects/pichangapp/e.jpeg"),
        import("@/assets/projects/pichangapp/f.jpeg"),
      ]);
      const alts = [
        "Plataforma de canchas vista general",
        "Reserva de canchas",
        "Panel de administración",
        "Gestión de horarios",
        "Detalle de reservas",
        "Vista móvil",
      ];
      return images.map((image, index) => ({
        src: image.default,
        alt: alts[index] ?? `Pichangapp ${index + 1}`,
      }));
    }
    default:
      return [];
  }
}
