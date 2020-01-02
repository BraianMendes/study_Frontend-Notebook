import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/main';
import Product from './pages/product';


const Routes = createStackNavigator(
	{
		Main,
		Product
	}, 
	{
	    defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#020F59',
			},
				headerTintColor: '#fff',
				headerTitleStyle: {
				fontWeight: 'bold',
			},
	    },	
        navigationOptions: {
		    tabBarLabel: 'Home!',
	    },	
	}
);

export default Routes;