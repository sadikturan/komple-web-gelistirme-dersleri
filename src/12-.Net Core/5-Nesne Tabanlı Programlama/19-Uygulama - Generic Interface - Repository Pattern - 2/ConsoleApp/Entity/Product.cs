namespace ConsoleApp.Entity
{
    public class Product:IEntity
    {       
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
       
    }
}