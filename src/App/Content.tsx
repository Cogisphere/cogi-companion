import { Routes, Route } from "react-router-dom";
import { Briefing, Chromaspex } from "../Pages";

export function Content() {
    return (
        <Routes>
            <Route path="/chromaspex" element={<Chromaspex/>}/>
            <Route path="/briefing" element={<Briefing/>}/>
            <Route path="/" element={<Briefing/>}/>
        </Routes>
    );
};
