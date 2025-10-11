export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px 80px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '4rem',
          margin: '0 0 20px 0',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Test Job #4
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#666',
          margin: '0 0 30px 0'
        }}>
          Successfully Deployed
        </p>
        <div style={{
          background: '#f5f5f5',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '30px'
        }}>
          <p style={{
            margin: '10px 0',
            color: '#333',
            fontSize: '1rem'
          }}>
            <strong>Status:</strong> ✅ Active
          </p>
          <p style={{
            margin: '10px 0',
            color: '#333',
            fontSize: '1rem'
          }}>
            <strong>Build:</strong> Next.js 14
          </p>
          <p style={{
            margin: '10px 0',
            color: '#333',
            fontSize: '1rem'
          }}>
            <strong>Timestamp:</strong> {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </main>
  );
}
