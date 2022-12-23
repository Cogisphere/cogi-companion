import { Footer as UIFooter, VersionList } from "@cogisphere/cogi-uikit";
import companionPackage from "../../package.json";
import uikitPackage from "@cogisphere/cogi-uikit/package.json";
import colorsPacakge from "@cogisphere/cogi-colors/package.json";

export function Footer() {

    const versions = {
        "cogi-companion": companionPackage.version,
        "cogi-uikit": uikitPackage.version,
        "cogi-colors": colorsPacakge.version
    };

    return (
        <UIFooter>
            <VersionList versions={versions}/>
        </UIFooter> 
    )
};