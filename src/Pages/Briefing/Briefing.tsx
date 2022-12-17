import { useTranslation } from "react-i18next";

export function Briefing() {

    const { t } = useTranslation();

    return (
        <h1>{t("briefing.title")}</h1>
    );
};