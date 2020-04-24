using ConsoleApp.Entity;

namespace ConsoleApp.DataAccess.Abstract
{ 
    public interface IProductRepository:IRepository<Product>
    {      
        Product[] GetProductsByCategory(int id);
        Product[] GetPopularProducts();       
    }
}