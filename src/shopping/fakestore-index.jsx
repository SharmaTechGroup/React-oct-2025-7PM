import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProducts } from "./fakestore-products";
import { FakestoreDetails } from "./fakestore-details";
import { FakestoreSearch } from "./fakestore-search";
import { FakestoreResults } from "./fakestore-results";

export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
              <header className="bg-dark text-white text-center p-2">
                <h3>Fakestore Index</h3>
              </header>
              <section className="mt-4">
                    <Routes>
                        <Route path="/" element={<FakestoreHome />} />
                        <Route path="products/:category" element={<FakestoreProducts />}>
                            <Route path="details/:id" element={<FakestoreDetails />} />
                        </Route>
                        <Route path="search" element={<FakestoreSearch />} />
                        <Route path="results" element={<FakestoreResults />} />
                        <Route path="*" element={<div><h3>Not Found - Path you requested not found.</h3></div>} />
                    </Routes>
              </section>
            </BrowserRouter>
        </div>
    )
}