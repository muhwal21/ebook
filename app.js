document.getElementById('testCheckoutButton').addEventListener('click', () => {
    try {
      // Check if Xendit object is available
      if (!window.Xendit) {
        alert('Xendit is not available. Ensure the Xendit.js script is loaded.');
        return;
      }
  
      // Set a dummy publishable key (replace this with your own valid key)
      Xendit.setPublishableKey('xnd_public_development_ndRBWkqalmKcKgo0uYwNAda_sMEUUeXXnfcYLvavBFgfh1Kae8fadG3sVsQw915');
  
      // Create dummy invoice parameters
      const testParams = {
        external_id: `test_invoice_${new Date().getTime()}`,
        amount: 1000,  // minimal amount for testing
        payer_email: 'test@example.com',
        description: 'Test Invoice for Xendit'
      };
  
      // Trigger invoice creation
      Xendit.invoice.create(testParams, function(err, response) {
        if (err) {
          console.error('Error creating test invoice:', err);
          alert('Failed to create test invoice.');
        } else {
          console.log('Test Invoice Created:', response);
          window.location.href = response.invoice_url;  // Redirect to the Xendit payment page
        }
      });
    } catch (error) {
      console.error('Error during Xendit test:', error);
      alert('An error occurred during the Xendit test.');
    }
  });
  
