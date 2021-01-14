import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps193334Navigator from '../features/Maps193334/navigator';
import Additem193333Navigator from '../features/Additem193333/navigator';
import Maps193329Navigator from '../features/Maps193329/navigator';
import UserProfile193325Navigator from '../features/UserProfile193325/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps193334: { screen: Maps193334Navigator },
Additem193333: { screen: Additem193333Navigator },
Maps193329: { screen: Maps193329Navigator },
UserProfile193325: { screen: UserProfile193325Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
