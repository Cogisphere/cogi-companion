import { WingNavigation } from "@cogisphere/cogi-uikit";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export function Header() {

    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <WingNavigation
            left={[
                { label: t("app.header.chromaspex"), onClick: () => navigate("/chromaspex") },
                
            ]}
            right={[
                { label: t("app.header.briefing"), onClick: () => navigate("/briefing") }
            ]}
            />
    );
};