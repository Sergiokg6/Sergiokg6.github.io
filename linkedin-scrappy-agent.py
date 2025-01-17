import os
from linkedin_api import Linkedin
from datetime import datetime
import time
import json

class LinkedInConnector:
    def __init__(self):
        """Initialize with LinkedIn API credentials"""
        self.api = None
        
    def authenticate(self, email, password):
        """Authenticate using LinkedIn credentials"""
        try:
            self.api = Linkedin(email, password)
            return True
        except Exception as e:
            print(f"Authentication failed: {str(e)}")
            return False
            
    def get_my_network(self):
        """Get your current connections"""
        if not self.api:
            return []
            
        try:
            connections = self.api.get_connections()
            return connections
        except Exception as e:
            print(f"Error getting connections: {str(e)}")
            return []
            
    def search_people(self, keywords, limit=10):
        """Search for people based on keywords"""
        if not self.api:
            return []
            
        try:
            results = self.api.search_people(
                keywords=keywords,
                limit=limit
            )
            return results
        except Exception as e:
            print(f"Search failed: {str(e)}")
            return []
            
    def send_connection_request(self, profile_id, message):
        """Send connection request with a personalized note"""
        if not self.api:
            return False
            
        try:
            # Add rate limiting
            time.sleep(2)  # Respect LinkedIn's rate limits
            self.api.invite_to_connect(profile_id, message)
            return True
        except Exception as e:
            print(f"Failed to send connection request: {str(e)}")
            return False

    def export_connections(self, filename):
        """Export your connections to a JSON file"""
        connections = self.get_my_network()
        
        if connections:
            with open(filename, 'w') as f:
                json.dump(connections, f, indent=2)
            return True
        return False

# Example usage
def main():
    connector = LinkedInConnector()
    
    # Configure with your LinkedIn credentials
    email = os.getenv("LINKEDIN_EMAIL")
    password = os.getenv("LINKEDIN_PASSWORD")
    
    if connector.authenticate(email, password):
        print("Successfully authenticated")
        
        # Search for relevant connections
        results = connector.search_people("python developer", limit=5)
        
        for person in results:
            message = f"Hi! I noticed we share an interest in Python development. Would love to connect!"
            if connector.send_connection_request(person['public_id'], message):
                print(f"Sent connection request to {person['full_name']}")
                
        # Export your network
        connector.export_connections("my_network.json")
    else:
        print("Authentication failed")

if __name__ == "__main__":
    main()