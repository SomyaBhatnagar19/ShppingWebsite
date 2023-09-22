import React, {useState, useEffect, Fragment} from 'react';
import Header from './Header';
import ProductList from './ProductList';
import {useSelector, useDispatch} from 'react-redux';
import Notification from './Notification';
import { UiActions } from './store/ui-slice';

function App() {
  const cart = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.ui.notification);
  console.log('notification:', notification);
  const [isInitial, setIsInitial] = useState(notification === null);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        UiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );

      try {
        const response = await fetch(
          'https://reduxshoppingapp-b6011-default-rtdb.firebaseio.com/Cart.json',
          {
            method: 'PUT',
            body: JSON.stringify(cart),
          }
        );

        if (!response.ok) {
          throw new Error('Sending cart data failed');
        } else {
          dispatch(
            UiActions.showNotification({
              status: 'success',
              title: 'Success!',
              message: 'Sent cart data successfully',
            })
          );
        }
      } catch (error) {
        dispatch(
          UiActions.showNotification({
            status: 'failed',
            title: 'Failed!',
            message: 'Sending cart data failed!',
          })
        );
      }
    };

    if (!isInitial) {
      sendCartData();
    } else {
      setIsInitial(false);
    }
  }, [cart, dispatch, isInitial]);

  return (
    <div>
      <Header />
      <Fragment>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
      </Fragment>
      <ProductList />
    </div>
  );
}

export default App;
