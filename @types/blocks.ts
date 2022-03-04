import type { components } from './schema';

export type BlockTypes =
  | components['schemas']['OpeningHourBlock']
  | components['schemas']['Covid19Block']
  | components['schemas']['PhoneBlock']
  | components['schemas']['InformationBlock']
  | components['schemas']['WebSiteBlock']
  | components['schemas']['ContactBlock']
  | components['schemas']['ServicesAndInformationBlock']
  | components['schemas']['AccessibilityBlock']
  | components['schemas']['InternetAccessBlock']
  | components['schemas']['BreweryBlock']
  | components['schemas']['ImagesBlock']
  | components['schemas']['GradesBlock']
  | components['schemas']['OpeningDayEvent']
  | components['schemas']['DescriptionEvent']
  | components['schemas']['CuisineBlock']
  | components['schemas']['Weather']
  | components['schemas']['RecyclingBlock']
  | components['schemas']['TransactionalBlock']
  | components['schemas']['SocialBlock']
  | components['schemas']['DescriptionBlock']
  | components['schemas']['DeliveryBlock']
  | components['schemas']['StarsBlock'];
