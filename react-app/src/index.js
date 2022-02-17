import React from 'react'
import ReactDom from 'react-dom'
import './static/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const lst = [{'AAG': 31.3}, {'ALR': -11.36}, {'ALT': -83.01}, {'ALU': 39.13}, {'AQ': 'N/A'}, {'ARM': -1066.23}, {'ARS': 25.96}, {'ARTE': 43.59}, {'ATB': 26.39}, {'BCM': 'N/A'}, {'BIO': 'N/A'}, {'BNET': -11.76}, {'BRD': 'N/A'}, {'BRK': 28.65}, {'BRM': 17.21}, {'BVB': 1.76}, {'CAOR': -15.91}, {'CBC': 3.22}, {'CEON': 7.9}, {'CMCM': 'N/A'}, {'CMF': 0.1}, {'CMP': 13.87}, {'CNTE': 77.94}, {'COMI': -230.64}, {'COS': -744.22}, {'COTE': 26.95}, {'DAFR': -588.13}, {'DIGI': 'N/A'}, {'EBS': 'N/A'}, {'ECT': 'N/A'}, {'EFO': 24.37}, {'EL': 18.5}, {'ELGS': -54.99}, {'ELJ': 145.48}, {'ELMA': 66.77}, {'ENP': -479.72}, {'EVER': 'N/A'}, {'FP': 'N/A'}, {'IARV': 78.89}, {'IMP': 10.35}, {'M': -11.95}, {'MCAB': -823.2}, {'MECE': -32.3}, {'MECF': 94.11}, {'NAPO': -330.92}, {'OIL': -76.84}, {'ONE': 'N/A'}, {'PBK': 'N/A'}, {'PPL': -0.36}, {'PREB': 34.19}, {'PREH': -0.76}, {'PTR': 87.21}, {'RMAH': 35.84}, {'ROCE': -3.14}, {'RPH': -64.38}, {'RRC': -178.26}, {'SCD': 'N/A'}, {'SFG': 7.76}, {'SIF1': 'N/A'}, {'SIF3': 'N/A'}, {'SIF4': 'N/A'}, {'SIF5': 'N/A'}, {'SNG': 25.34}, {'SNN': 14.05}, {'SNO': 92.03}, {'SNP': 28.48}, {'SOCP': -105.5}, {'STZ': -37.91}, {'TBK': 3.97}, {'TBM': 55.32}, {'TEL': 17.11}, {'TGN': 15.77}, {'TLV': 'N/A'}, {'TRP': 3.82}, {'TTS': 'N/A'}, {'TUFE': -6.31}, {'UAM': 27.03}, {'UCM': 'N/A'}, {'UZT': 123.13}, {'VESY': -212.7}, {'VNC': -36.14}, {'WINE': 'N/A'}, {'2P': 'N/A'}, {'AAB': 'N/A'}, {'ADISS': 'N/A'}, {'ADMY': 'N/A'}, {'ADS': 'N/A'}, {'AG': 'N/A'}, {'AGCM': 'N/A'}, {'AGQR': 'N/A'}, {'ALB': 'N/A'}, {'ALCQ': 'N/A'}, {'ALRV': 'N/A'}, {'ALV': 'N/A'}, {'ALW': 'N/A'}, {'AMAL': 'N/A'}, {'AMPL': 'N/A'}, {'ANIM': -1010.47}, {'ANTA': 'N/A'}, {'ANTE': 'N/A'}, {'APP': 'N/A'}, {'ARAX': -91.29}, {'ARCU': 2.61}, {'ARCV': 50.01}, {'ARJI': 'N/A'}, {'ARMT': 'N/A'}, {'ARO': 5.9}, {'AROBS': 'N/A'}, {'ASC': -15.64}, {'ASP': 'N/A'}, {'AST': 'N/A'}, {'ATLK': 'N/A'}, {'ATRD': 'N/A'}, {'AUR': 'N/A'}, {'AUXI': 'N/A'}, {'AVIO': 'N/A'}, {'AVSL': 5.93}, {'BADE': 'N/A'}, {'BALN': -10.89}, {'BAYN': 'N/A'}, {'BBGA': 149.37}, {'BIBU': -18.69}, {'BIOW': 'N/A'}, {'BLEA': 'N/A'}, {'BMW': 'N/A'}, {'BNAT': 'N/A'}, {'BONA': 'N/A'}, {'BRCR': 'N/A'}, {'BRNA': 'N/A'}, {'BUCS': 'N/A'}, {'BUCU': 2.38}, {'BUCV': -6.69}, {'CAB': 'N/A'}, {'CACU': 'N/A'}, {'CAIN': 'N/A'}, {'CBKN': 'N/A'}, {'CBOT': -152.54}, {'CC': 'N/A'}, {'CCOM': 'N/A'}, {'CEPO': 'N/A'}, {'CFED': -22.77}, {'CHIA': 'N/A'}, {'CHOB': -6.51}, {'CICE': 'N/A'}, {'CICO': 'N/A'}, {'CLAIM': 'N/A'}, {'CLUB': 'N/A'}, {'CLUJ': 'N/A'}, {'CMBU': 'N/A'}, {'CMIL': 'N/A'}, {'CMVX': -74.58}, {'COBJ': 175.14}, {'COBL': -35.3}, {'COBU': 'N/A'}, {'COCB': 'N/A'}, {'COCR': -99.76}, {'CODE': 'N/A'}, {'COEC': -183.51}, {'COET': 'N/A'}, {'COKG': 'N/A'}, {'COKJ': 'N/A'}, {'COLK': 'N/A'}, {'COMY': 265.36}, {'CONJ': -3359.35}, {'CONK': 'N/A'}, {'CONQ': 2.06}, {'CORO': 'N/A'}, {'COTM': 'N/A'}, {'COTN': 0.42}, {'COUT': 93.68}, {'COVB': 22.86}, {'CPHA': 'N/A'}, {'CPLB': 'N/A'}, {'CRMC': 'N/A'}, {'CRPC': 'N/A'}, {'CTT': 'N/A'}, {'CTUL': 'N/A'}, {'DAI': 'N/A'}, {'DBK': 'N/A'}, {'DIAS': 50.27}, {'DOIS': -274.0}, {'DPW': 'N/A'}, {'DTE': 'N/A'}, {'DUPX': 'N/A'}, {'EEAI': 'N/A'}, {'EETS': 17.36}, {'ELCT': 'N/A'}, {'ELEL': 'N/A'}, {'ELER': 159.36}, {'ELJA': 24.59}, {'ELRD': 'N/A'}, {'ELV': 154.54}, {'ELZY': -2.48}, {'EMAI': 'N/A'}, {'EMTL': 'N/A'}, {'EOAN': 'N/A'}, {'EPN': 'N/A'}, {'EXPV': -567.97}, {'FACY': -0.72}, {'FAMZ': 'N/A'}, {'FEP': 21.01}, {'FERO': 'N/A'}, {'FIMA': 'N/A'}, {'FIMR': 'N/A'}, {'FLAO': 2.0}, {'FMAR': 'N/A'}, {'FOJE': 'N/A'}, {'FOMA': 'N/A'}, {'FOSB': 'N/A'}, {'FOSP': 'N/A'}, {'FRB': 'N/A'}, {'GALF': 'N/A'}, {'GAOY': 'N/A'}, {'GDP': 'N/A'}, {'GHIM': 129.57}, {'GRIU': -9.0}, {'GROB': -543.7}, {'HAI': 'N/A'}, {'HEAL': -22.86}, {'HLEB': 'N/A'}, {'HUNT': 'N/A'}, {'IAMU': 1.37}, {'IANY': -85.67}, {'IASX': 'N/A'}, {'ICEV': 'N/A'}, {'ICMA': 'N/A'}, {'ICMR': -1586.55}, {'ICSH': 'N/A'}, {'ICSI': 'N/A'}, {'INBO': 'N/A'}, {'INCT': 'N/A'}, {'INMA': 'N/A'}, {'INOX': -31.69}, {'INSI': 'N/A'}, {'INTA': 'N/A'}, {'IORB': 'N/A'}, {'IPHI': -9.77}, {'IPRO': 'N/A'}, {'IPRU': 134.93}, {'IUBR': 'N/A'}, {'LACT': 'N/A'}, {'LCSI': 'N/A'}, {'LHA': 'N/A'}, {'LIDO': 'N/A'}, {'LIH': -3.23}, {'LITO': 'N/A'}, {'MABE': 'N/A'}, {'MACO': 9.61}, {'MALI': 25.99}, {'MAM': 'N/A'}, {'MAMA': 'N/A'}, {'MEBY': 'N/A'}, {'MECA': 109.77}, {'MECH': 'N/A'}, {'MECP': 'N/A'}, {'MEGU': 'N/A'}, {'MELE': -2.72}, {'MEOR': 'N/A'}, {'MEOY': 'N/A'}, {'MESA': -57.39}, {'METT': 'N/A'}, {'METY': 'N/A'}, {'MILK': 'N/A'}, {'MINO': 'N/A'}, {'MINX': 'N/A'}, {'MOBD': 'N/A'}, {'MOBE': 'N/A'}, {'MOBG': 25.3}, {'MOBT': 'N/A'}, {'MODY': 'N/A'}, {'MOIB': -38.03}, {'MORA': 'N/A'}, {'MRDO': 'N/A'}, {'NACH': -2920.58}, {'NAXY': -70.7}, {'NCHI': 'N/A'}, {'NEOL': 'N/A'}, {'NORD': 0.49}, {'NRF': 6.38}, {'NTEX': 15.71}, {'NUIA': 'N/A'}, {'OMAL': 'N/A'}, {'OMSE': 191.06}, {'ORAS': -124.26}, {'PACY': 7.36}, {'PARC': 'N/A'}, {'PCTM': 'N/A'}, {'PELA': 'N/A'}, {'PETY': -61.61}, {'POBR': 'N/A'}, {'POTI': 'N/A'}, {'PPLI': 'N/A'}, {'PRAE': -39.81}, {'PRAH': 'N/A'}, {'PRBU': -11.51}, {'PRDI': 20.06}, {'PRIB': 'N/A'}, {'PRIN': 'N/A'}, {'PRMT': -5054.94}, {'PRSN': -2.45}, {'PTRC': -256.62}, {'PVBS': 'N/A'}, {'RANT': 'N/A'}, {'RCHI': 'N/A'}, {'REFE': -130.17}, {'REGL': 'N/A'}, {'REIT': 'N/A'}, {'RELE': 25.96}, {'REMM': -4.14}, {'RETZ': 'N/A'}, {'REVA': 60.57}, {'RKOT': 'N/A'}, {'ROOF': 'N/A'}, {'RORX': -215.81}, {'RRD': 6.42}, {'SAFE': -1.08}, {'SAP': 'N/A'}, {'SATU': 'N/A'}, {'SCBC': 29.1}, {'SCDM': 8.29}, {'SCTB': 'N/A'}, {'SEBZ': 'N/A'}, {'SECE': 'N/A'}, {'SELC': -7.94}, {'SEOL': -5.76}, {'SEOM': 33.15}, {'SERC': 11.41}, {'SEVE': -179.76}, {'SIDG': 'N/A'}, {'SIE': 'N/A'}, {'SIEP': 'N/A'}, {'SIFI': 'N/A'}, {'SIGS': 'N/A'}, {'SINA': 'N/A'}, {'SINT': 'N/A'}, {'SIRJ': 'N/A'}, {'SIRM': 'N/A'}, {'SLBB': 'N/A'}, {'SMTL': 'N/A'}, {'SNC': 'N/A'}, {'SOMB': 'N/A'}, {'SOMR': 'N/A'}, {'SOPL': 'N/A'}, {'SOTA': 'N/A'}, {'SPTU': 'N/A'}, {'STNM': 'N/A'}, {'STOF': 340.44}, {'STOZ': 'N/A'}, {'TALD': 319.58}, {'TERA': 'N/A'}, {'TIGH': 'N/A'}, {'TRAM': 'N/A'}, {'TRCS': 'N/A'}, {'TRGI': 'N/A'}, {'TRNG': 'N/A'}, {'TRSB': -0.15}, {'TRSK': -84.38}, {'TRVC': 'N/A'}, {'TRVM': 'N/A'}, {'TSLA': 'N/A'}, {'TSND': 'N/A'}, {'TUAA': -18.1}, {'TUAA1': 'N/A'}, {'UARG': 'N/A'}, {'UCET': 'N/A'}, {'UNIR': 'N/A'}, {'UNISEM': 'N/A'}, {'UNIT': 'N/A'}, {'UNP': 'N/A'}, {'UNVR': 'N/A'}, {'UPET': 'N/A'}, {'UPRR': 'N/A'}, {'URBA': 'N/A'}, {'URCB': 'N/A'}, {'UTGR': 'N/A'}, {'UZC': -52.68}, {'UZIN': 'N/A'}, {'VAC': 10.94}, {'VIAG': 'N/A'}, {'VIRO': 'N/A'}, {'VITK': 'N/A'}]

function App(){
  return (
    <Table>
      
    </Table>
    )
}

function Table(){
  return(
    <table className='table table-striped'>
      <thead className='tableHeader'>
          <tr>
          <th>BSE Ticker</th>
          <th>NetNet</th>
          </tr>
      </thead>
      {lst.map((item) => <Row ticker={Object.keys(item)} value={Object.values(item)}></Row>)}
    </table>
  )
}

function Row(props){
  return(
    <tr>
      <td>{props.ticker}</td>
      <td>{props.value}</td>
		</tr>
)

}
ReactDom.render(<App/>, document.querySelector('.spotlight'));