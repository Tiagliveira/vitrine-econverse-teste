import type { JSX } from "react";
export const category = [
    { label: "CELULAR", target: "celular-section" },
    { label: "ACESÓRIOS", target: "acessorios-section", underConstruction: true },
    { label: "TABLET", target: "tablet-section", underConstruction: true  },
    { label: "NOTEBOOK", target: "notebook-section", underConstruction: true  },
    { label: "TVS", target: "tvs-section", underConstruction: true  },
    { label: "VER TODOS", target: "ver-todos-section" },
    {label: "OFERTAS DO DIA", target:"section-home"}
];




export function renderCategoryLinks(
    links: { label: string; target: string; underConstruction?: boolean }[],
    selectLabels?: string[],
    onLinkClick?: (target: string) => void
): JSX.Element[] {
    const filteredLinks = selectLabels ? links.filter((link) => selectLabels.includes(link.label)) : links;

    return filteredLinks.map(({ label, target, underConstruction }, index) => (
        <a key={index} onClick={() => {

            if (onLinkClick) {
                onLinkClick(target);
            } else {
                const section = document.getElementById(target);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        }}
        >{label}
        {underConstruction && ""}

        </a>
    ))
}
