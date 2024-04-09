import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

import {screens} from '../utilitis';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function replace(screen) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(screen));
  }
}

export function resetToHome() {
  if (navigationRef) {
    navigationRef.dispatch(state => {
      const routes = state.routes.filter(r => r.name == screens.bottomTab);
      console.log(routes);
      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }
}
