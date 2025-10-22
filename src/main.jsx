import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './components/login/login'  
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { DataBinding } from './components/data-binding/data-binding';
import { Flipkart } from './components/flipkart/flipkart';
import { Nasa } from './components/nasa/nasa';
import { EventBinding } from './components/event-binding/event-binding';
import { MouseDemo } from './components/mouse-demo/mouse-demo';
import { MouseMove } from './components/mouse-move/mouse-move';
import { KeyDemo } from './components/key-demo/key-demo';
import { PasswordStrength } from './components/password-strength/password-strength';
import { FocusDemo } from './components/focus-demo/focus-demo';
import { DebounceDemo } from './components/debounce-demo/debounce-demo';
import { TimerDemo } from './components/timer-demo/timer-demo';
import { TimeoutDemo } from './components/time-out-demo/time-out-demo';
import { CarouselDemo } from './components/carousel-demo/carousel-demo';
import { LoadingStatus } from './components/loading-status/loading-status';
import { FormDemo } from './components/form-demo/form-demo';
import { FormikComponentDemo } from './components/formik-component-demo/formik-component-demo';
import { HookFormDemo } from './components/hook-form-demo/hook-form-demo';
import { ControlledDemo } from './components/controlled-demo/controlled-demo';
import { ConditionDemo } from './components/condition-demo/condition-demo';
import { Fakestore } from './components/fakestore/fakestore';
import { ContextDemo } from './components/context-demo/context-demo';
import { TransportDemo } from './components/transport-demo/transport-demo';
import { SearchProducts } from './fakestore/search-products';
import { LifeCycleDemo } from './components/life-cycle-demo/life-cycle-demo';
import { TutorialIndex } from './video-tutorials/tutorial-index';
import { FakestoreIndex } from './shopping/fakestore-index';
import { CookiesProvider } from 'react-cookie';
import { VideoLibraryIndex } from './video-library/video-library-index';


createRoot(document.getElementById('root')).render(
  
   <CookiesProvider>
       <VideoLibraryIndex/>
   </CookiesProvider>
  
)
