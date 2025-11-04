export default function handler(req, res) {
  const contract = req.query.contract || 'TN2ey2U9QiP5EzoUHjGduqxRUh8nCHeVQm';  
  res.status(200).json({
    [contract]: {
      usd: 1.00,          
      currency: 'USD',    
      timestamp: new Date().toISOString()  
    }
  });
}
