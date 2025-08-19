

export function handleOverlay(
    target: string,
    OpenOverlay: (section: string) => void
): void {
    const overlaySections = [
        "ver-todos-section",
        "acessorios-section",
        "tablet-section",
        "notebook-section",
        "tvs-section",
        "instagram",
        "facebook",
        "linkedin",
        "sobre-nos",
        "movimento",
        "trabalhe-conosco",
        "suporte",
        "fale-conosco",
        "perguntas-frequentes",
        "temos-e-condicoes",
        "politica-de-privacidade",
        "troca-e-devolucao"];
    if (overlaySections.includes(target)) {
        OpenOverlay(target);
    } else {
        const section = document.getElementById(target);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
}
