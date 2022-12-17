import { useTranslation } from "react-i18next";

/**
 *  This is a component that allows use to create and manage color paletts.
 */
export function Chromaspex() {
    
    const { t } = useTranslation();

    return (
        <h1>{t("chromaspex.title")}</h1>
    );
};