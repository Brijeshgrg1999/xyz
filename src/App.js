import React from 'react';
import Navbar from './components/Navbar';
import "./index.css";


import ListContextProvider from './ListContext';
import { Outlet } from 'react-router-dom';
import { ApiProvider, TrendingApiProvider } from './state/context/TrendingMovies';
import { PopularApiProvider } from './state/context/PopularMovies';
import { UpcomingApiProvider } from './state/context/UpcommingMovies';
import { TopRatedProvider } from './state/context/TopratedMovies';
import { PopularPeopleApiProvider } from './state/context/PopularPeople';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContextProvider } from './user/state/userContext';
import { UserListContextProvider } from './user/features/userWishlist';



const App = () => {

  const queryClient = new QueryClient() ; 

  return (
  <UserContextProvider> {/* user state */}
    <UserListContextProvider>
    <TrendingApiProvider>
      <PopularApiProvider>        
        <ListContextProvider>
          <UpcomingApiProvider>
            <TopRatedProvider>
              <PopularPeopleApiProvider>
                <QueryClientProvider client={queryClient}>
                  <div>
                    <Navbar />
                    <Outlet />
                  </div>
            </QueryClientProvider>
            </PopularPeopleApiProvider>
            </TopRatedProvider>
          </UpcomingApiProvider>
        </ListContextProvider>
      </PopularApiProvider>
    </TrendingApiProvider>
    </UserListContextProvider>
    </UserContextProvider>
  )
}

export default App;