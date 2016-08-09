using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication4
{ 
class Program
{
    static void Main()
    {
        Console.WriteLine("... Press escape, a, then control X");
        // Call ReadKey method and store result in local variable.
        // ... Then test the result for escape.
        ConsoleKeyInfo info = Console.ReadKey();
        if (info.Key == ConsoleKey.Escape)
        {
            Console.WriteLine("You pressed escape!");
        }
        // Call ReadKey again and test for the letter a.
        info = Console.ReadKey();
        if (info.KeyChar == 'a')
        {
            Console.WriteLine("You pressed a");
        }
        // Call ReadKey again and test for control-X.
        // ... This implements a shortcut sequence.
        info = Console.ReadKey();
        if (info.Key == ConsoleKey.X &&
            info.Modifiers == ConsoleModifiers.Control)
        {
            Console.WriteLine("You pressed control X");
        }
        Console.Read();
    }
}
}
