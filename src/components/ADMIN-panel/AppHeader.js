import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getItem } from '../../core/services/storage/storage'
import GetEmployeeDetail from '../../core/services/api/GetEmployeeDetail.api'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header'
import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  const [adName, setAdName] = useState('')
  const doInfo = async () => {
    const adminDetail = await GetEmployeeDetail()
    {
      getItem('token') ? setAdName(adminDetail.result.fullName) : setAdName('')
    }
  }

  useEffect(() => {
    doInfo()
  }, [adName])

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4 admin-header">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav style={{ marginRight: '25px' }} className="d-none d-md-flex ms-auto">
          {getItem('token') && <CNavItem>{`خوش آمدی ${adName}`}</CNavItem>}
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon className={'admin-nav-link'} icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon className={'admin-nav-link'} icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon className={'admin-nav-link'} icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
