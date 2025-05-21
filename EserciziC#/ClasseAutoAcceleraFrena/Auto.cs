 class Auto
    {
        public int VelocitaAttuale { get; private set; }

        public Auto()
        {
            VelocitaAttuale = 50;
        }
        
        public string GetVelocita()
        {
            return $"Velocità attuale: {VelocitaAttuale} km/h";
        }
        public void Accelera()
        {
            VelocitaAttuale += 10;
            Console.WriteLine($"Velocità attuale: {VelocitaAttuale} km/h");
            if (VelocitaAttuale > 130)
            {
                Console.WriteLine("Rallenta! Stai andando troppo forte.");
            }
        }

        public void Frena()
        {
            VelocitaAttuale -= 5;
            if (VelocitaAttuale > 130)
            {
                Console.WriteLine("Rallenta! Stai andando troppo forte.");
            }
            if (VelocitaAttuale < 0)
                    VelocitaAttuale = 0;

            Console.WriteLine($"Velocità attuale: {VelocitaAttuale} km/h");
        }
    }