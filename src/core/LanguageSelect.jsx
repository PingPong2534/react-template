import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {Nav, NavDropdown} from 'react-bootstrap';

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  th: { label: "ภาษาไทย", dir: "rtl", active: false }
};

const LanguageSelect = () => {
  const { t, i18n  } = useTranslation("common");
  return (
    <>
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={languageMap[i18n.language].label}
          menuVariant="dark"
        >
          <NavDropdown.Item onClick={()=>i18next.changeLanguage("en")}>
            {languageMap["en"].label}
          </NavDropdown.Item>
          <NavDropdown.Item onClick={()=>i18next.changeLanguage("th")}>
            {languageMap["th"].label}
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};

export default LanguageSelect;
