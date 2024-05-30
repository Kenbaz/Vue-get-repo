import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faExclamationCircle,
  faExclamation,
  faChevronLeft, faChevronRight, faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEnvelope, faHome, faGithub, faLinkedin, faExclamationCircle, faExclamation, faChevronLeft, faChevronRight);

export { FontAwesomeIcon };
