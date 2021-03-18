import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faExclamationTriangle,
  faSpinner,
  faUserCircle,
  faFilter,
  faExternalLinkAlt,
  faSync,
  faArrowRight,
  faCheck,
  faCheckSquare,
  faSearch,
  faLock,
  faTimes,
  faBan,
  faChevronLeft,
  faChevronRight,
  faArrowAltCircleRight,
  faHome,
  faTrash,
  faClock,
  faSave,
  faPrint,
  faShippingFast,
  faDownload,
  fas,
} from '@fortawesome/free-solid-svg-icons';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

interface MaterialIcon {
  name: string;
  url: any;
}

@Injectable()
export class IconsHelper {
  private faIcons: IconDefinition[] = [
    faEdit,
    faExclamationTriangle,
    faSpinner,
    faUserCircle,
    faFilter,
    faExternalLinkAlt,
    faSync,
    faArrowRight,
    faCheck,
    faCheckSquare,
    faSearch,
    faLock,
    faTimes,
    faBan,
    faChevronLeft,
    faChevronRight,
    faArrowAltCircleRight,
    faHome,
    faTrash,
    faClock,
    faSave,
    faPrint,
    faShippingFast,
    faDownload,
  ];

  private materialIcons: MaterialIcon[] = [
    {
      name: 'arrow-down',
      url: 'assets/images/icons/icon-arrow-down.svg',
    },
    {
      name: 'close',
      url: 'assets/images/icons/icon-close.svg',
    },
    {
      name: 'dropdown',
      url: 'assets/images/icons/icon-dropdown.svg',
    },
    {
      name: 'menu-expansion',
      url: 'assets/images/icons/icon-menu-expansion.svg',
    },
    {
      name: 'submenu-expansion',
      url: 'assets/images/icons/icon-submenu-expansion.svg',
    },
    {
      name: 'menu',
      url: 'assets/images/icons/icon-menu.svg',
    },
    {
      name: 'facebook',
      url: 'assets/images/icons/icon-facebook.svg',
    },
    {
      name: 'twitter',
      url: 'assets/images/icons/icon-twitter.svg',
    },
    {
      name: 'instagram',
      url: 'assets/images/icons/icon-instagram.svg',
    },
    {
      name: 'youtube',
      url: 'assets/images/icons/icon-youtube.svg',
    },
    {
      name: 'linkedin',
      url: 'assets/images/icons/icon-linkedin.svg',
    },
    {
      name: 'ecp-locate',
      url: 'assets/images/icons/icon-locate.svg',
    },
    {
      name: 'ecp-plus',
      url: 'assets/images/icons/icon-plus.svg',
    },
    {
      name: 'offers',
      url: 'assets/images/icons/icon-offers.svg',
    },
    {
      name: 'ecp-arrow-left',
      url: 'assets/images/icons/icon-arrow-left.svg',
    },
    {
      name: 'ecp-arrow-right',
      url: 'assets/images/icons/icon-arrow-right.svg',
    },
    {
      name: 'ecp-scroll-down',
      url: 'assets/images/icons/icon-scroll-down.svg',
    },
    {
      name: 'ecp-play',
      url: 'assets/images/icons/icon-play.svg',
    },
    {
      name: 'ecp-play-dark',
      url: 'assets/images/icons/icon-play-dark.svg',
    },
  ];

  /**
   * constructor
   * @param {MatIconRegistry} iconReg
   * @param {DomSanitizer} sanitizer
   * @param faLibrary
   */
  constructor(
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private faLibrary: FaIconLibrary,
  ) {}

  /**
   * installIcons
   */
  installIcons(): void {
    this.faLibrary.addIconPacks(fas);
    this.faLibrary.addIcons(...this.faIcons);

    this.materialIcons.forEach(({ name, url }) => {
      this.iconReg.addSvgIcon(
        name,
        this.sanitizer.bypassSecurityTrustResourceUrl(url),
      );
    });
  }
}