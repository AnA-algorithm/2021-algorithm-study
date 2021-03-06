package BOJ;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ1958 {

    static int [][][] LCS;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str1 = br.readLine();
        String str2 = br.readLine();
        String str3 = br.readLine();

        LCS = new int[str1.length()+1][str2.length()+1][str3.length()+1];

        for (int i=1; i<str1.length()+1; i++){
            for (int j=1; j<str2.length()+1; j++){
                for (int k=1; k<str3.length()+1; k++){
                    if(str1.charAt(i-1) == str2.charAt(j-1) && str2.charAt(j-1) == str3.charAt(k-1)) {
                        LCS[i][j][k] = LCS[i-1][j-1][k-1] + 1;
                    } else {
                        LCS[i][j][k] = Math.max(LCS[i-1][j][k], Math.max(LCS[i][j-1][k], LCS[i][j][k-1]));
                    }
                }
            }
        }
        System.out.println(LCS[str1.length()][str2.length()][str3.length()]);
    }
}