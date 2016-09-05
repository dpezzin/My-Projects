using System;
using System.IO;

class Deposit
{
    public static void Main()
    {
        using (StreamWriter w = File.AppendText("account_summary.txt"))
        {
            Log("Test1", w);
        }

        using (StreamReader r = File.OpenText("account_summary.txt"))
        {
            DumpLog(r);
        }
    }

    public static void Log(string logMessage, TextWriter w)
    {
        w.Write("\r\n[+] : ");
        w.WriteLine("{0} {1}", DateTime.Now.ToLongTimeString(),
            DateTime.Now.ToLongDateString());
        w.WriteLine("Client name : Chalupa Batman");
        w.WriteLine("Account number : 8765309-01");
        w.WriteLine("Account type : Checking");
        w.WriteLine("Transaction amount : {0}", logMessage);
        w.WriteLine("Account Balance : ");

        w.WriteLine("-------------------------------");
    }

    public static void DumpLog(StreamReader r)
    {
        string line;
        while ((line = r.ReadLine()) != null)
        {
            Console.WriteLine(line);
        }
    }
}