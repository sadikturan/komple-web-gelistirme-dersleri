using System;
using ConsoleApp.DataAccess.Abstract;
using ConsoleApp.Entity;

namespace ConsoleApp.DataAccess.Concrete
{ 
    public class EfProductDal : IProductRepository
    {
        public void Create(Product entity)
        {
           Console.WriteLine("EFProduct - create");
        }

        public void Delete(int id)
        {
            throw new System.NotImplementedException();
        }

        public Product GetById(int id)
        {
            throw new System.NotImplementedException();
        }

        public Product[] GetPopularProducts()
        {
            throw new System.NotImplementedException();
        }

        public Product[] GetProductsByCategory(int id)
        {
            throw new System.NotImplementedException();
        }

        public void Update(Product entity)
        {
            throw new System.NotImplementedException();
        }
    }
}