import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/main';

export default createStackNavigator({
		Main
	}, 
	{
		navigationOptions: {
			headerStyle: {
				backgroundColor: "#020F59"
			},
			headerTintColor: '#FFF'
		},
	}
);