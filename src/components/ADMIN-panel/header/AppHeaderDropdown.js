import React from "react";
import { useHistory, Link } from "react-router-dom";
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
  const logOut = () => {
    clearStorage();
    history.push("/login");
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
        <Link to="/login">
          <CDropdownItem>
            <CIcon
              onClick={() => logOut()}
              icon={cilLockLocked}
              className="ms-2"
            />
            خروج
          </CDropdownItem>
        </Link>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
