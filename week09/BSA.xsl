<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">


<xsl:template match="/">
	<html>
	<head>
		<title>BSA Information</title>
		<style>
			h1 {font-family: Arial,Univers,sans-serif;
				font-size: 36pt }
				
			table {width: 800px;}
		</style>
	</head>
	
	<body>
	<a href="..index.html">
		Back to Index
	</a>
	
    <h1>Boy Scouts of America Information</h1>
	
<!--Going to scan through the XML document and put everything into a table-->	
	<!--Starting with the header for each table naming the council that they are apart of -->
	<xsl:for-each select="bsa/council">
		
		<h2><xsl:value-of select="@name" /></h2>
		<table border="1">
		<!-- Now we list out the troop-->
			<xsl:for-each select="troop">
				<tr bgcolor="#9acd32">
					<th>
						#<xsl:value-of select="@number" />
						-
						<xsl:value-of select="@unit" />
					</th>
				</tr>
		<!--putting in labels for individual cells-->
				<tr>
					<td>First, Last Names</td>
					<td>Address</td>
					<td>Phone</td>
					<td>MeritBadges</td>
					<td>Rank</td>
				</tr>
<!--Now we list out individual scouts and their information-->
				<xsl:for-each select="scout">
					<tr>
						<td>
							<xsl:value-of select="first-name" />
							<xsl:text> </xsl:text>
							<xsl:value-of select="last-name" />
						</td>
						<td>
							<xsl:value-of select="address/street" />
							<xsl:text> </xsl:text>
							<xsl:value-of select="address/city" />
							<xsl:text>, </xsl:text>
							<xsl:value-of select="address/state" />
						</td>
						<td>
							<xsl:value-of select="phone" />
						</td>
						<td>
							
							<SELECT NAME="scout">
								<!--<xsl:for-each select="scout">-->
								<!--I can't get this to work right it only displays the first meritbadge-->
								<!-- Could you please e-mail me about this code my e-mail is alexbluhm1993@gmail.com-->
									<OPTION VALUE="{meritbadge}">
									
										<xsl:value-of select="meritbadge" />
									
									</OPTION>
								<!--</xsl:for-each>-->
							</SELECT>
							
						</td>
						<td>
							<xsl:value-of select="rank" />
						</td>
					</tr>
				</xsl:for-each>
				
			</xsl:for-each>
		</table>
	</xsl:for-each>

	<p>Just want to say that I tried my best with this assignment 
	which left me very little time to make it look nice. I think things will be better with AJAX</p>
	
  </body>
  </html>
  
</xsl:template>

</xsl:stylesheet>