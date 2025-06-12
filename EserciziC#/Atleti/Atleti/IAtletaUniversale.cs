using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Atleti
{
    internal interface IAtletaUniversale : IAtleta, INuotatore, ITennista
    {
        string Mangio();
        string Bevo();
    }
}
