import json

with open('checkov_report.json') as f:
    checkov_data = json.load(f)

sonar_issues = []

# for result in checkov_data['results']['failed_checks']:
for item in checkov_data:
    for result in item['results'].get('failed_checks', []):
        sonar_issue = {
            'ruleId': result['check_id'],
            'severity': 'BLOCKER' if result['severity'] == 'HIGH' else 'MAJOR' if result['severity'] == 'MEDIUM' else 'MINOR',
            'type': 'VULNERABILITY',
            'primaryLocation': {
                'message': result['check_name'],
                'filePath': result.get('file_path', result.get('repo_file_path', '')),
                'textRange': {
                    # 'startLine': result['line'],
                    'startLine': result.get('file_line_range', [0, 0])[0],
                    # 'endLine': result['line']
                    'endLine': result.get('file_line_range', [0, 0])[0]
                }
            }
        }
        sonar_issues.append(sonar_issue)

with open('sonarqube_report.json', 'w') as f:
    json.dump(sonar_issues, f, indent=2)

