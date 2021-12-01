import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { clearStorage } from "../../../core/services/storage/storage";
import User from "src/core/context/UserContext/UserContext";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import avatar8 from "../../../assets/images/avatars/img4.png";

const AppHeaderDropdown = () => {
  const user = useContext(User);
  const history = useHistory();

  const logOut = () => {
    clearStorage();
    user.setUser(null);
    history.push("/");
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          پروفایل
        </CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="ms-2" />
          بروزرسانی
          <CBadge color="info" className="me-2">
            2
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="ms-2" />
          پیام ها
          <CBadge color="success" className="me-2">
            4
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">
          تنظیمات
        </CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="ms-2" />
          پروفایل
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="ms-2" />
          تنظیمات
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="ms-2" />
          کیف پول
          <CBadge color="secondary" className="me-2">
            2
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider />

        <CDropdownItem>
          <CIcon
            onClick={() => logOut()}
            icon={cilLockLocked}
            className="ms-2"
          />
          خروج
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
